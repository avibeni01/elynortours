// api/createSalesforceOpportunity.tsx
import type { NextApiRequest, NextApiResponse } from 'next';
import jsforce from 'jsforce';

// Configuration de la connexion Salesforce
const SF_LOGIN_URL = process.env.VITE_SALESFORCE_LOGIN_URL || 'https://login.salesforce.com';
const SF_USERNAME = process.env.VITE_SALESFORCE_USERNAME;
const SF_PASSWORD = process.env.VITE_SALESFORCE_PASSWORD;
const SF_TOKEN = process.env.VITE_SALESFORCE_SECURITY_TOKEN;

// Helper function to convert yyyy-mm-dd string to Date for Salesforce
const formatDateForSalesforce = (dateStr: string | null | undefined): string | null => {
  if (!dateStr) return null;
  
  // Salesforce accepte les dates au format ISO 8601
  try {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toISOString();
  } catch (error) {
    console.warn('[CreateOpportunity] Invalid date string format:', dateStr, error);
    return null;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  // Vérifier les identifiants Salesforce
  if (!SF_USERNAME || !SF_PASSWORD) {
    return res.status(500).json({ error: 'Identifiants Salesforce manquants' });
  }

  try {
    // Destructurer les données du formulaire
    const {
      contactId,
      firstName,
      lastName,
      activeTab,
      // Données communes
      destination,
      // Dates au format yyyy-mm-dd
      check_in_date_str,
      check_out_date_str,
      // Données hôtel
      occupants,
      rating,
      selectedOptions,
      souhaite_hotel_en_particulier,
      // Données voiture
      selectedVehicle,
      stationName,
      pickupTime,
      returnTime,
      driverAge,
      hasVisa,
      shomer_shabbat
    } = req.body;

    console.log('[CreateOpportunity] Données reçues:', req.body);

    // Connexion à Salesforce
    const conn = new jsforce.Connection({
      loginUrl: SF_LOGIN_URL
    });

    // Authentification
    await conn.login(SF_USERNAME, SF_PASSWORD + (SF_TOKEN || ''));

    // Déterminer le type de Record Type
    const recordTypeQuery = await conn.query(`
      SELECT Id FROM RecordType 
      WHERE SObjectType = 'Opportunity' 
      AND DeveloperName = '${activeTab === 'hotel' ? 'HotelReservation' : 'CarRental'}'
    `);

    if (recordTypeQuery.records.length === 0) {
      return res.status(500).json({
        error: 'Type d\'enregistrement non trouvé',
        detail: 'RecordType non configuré dans Salesforce'
      });
    }

    const recordTypeId = recordTypeQuery.records[0].Id;

    // Nom de l'opportunité
    const opportunityName = `${firstName} ${lastName} - ${activeTab === 'hotel' ? 'Réservation Hôtel' : 'Location Voiture'}`;
    
    // Date de clôture (par défaut à 30 jours)
    const closeDate = new Date();
    closeDate.setDate(closeDate.getDate() + 30);
    
    // Étape par défaut
    const stageName = 'Nouvelle demande';

    // Préparer les données de l'opportunité
    const opportunityData: any = {
      Name: opportunityName,
      ContactId: contactId,
      CloseDate: closeDate.toISOString(),
      StageName: stageName,
      RecordTypeId: recordTypeId,
      ReservationType__c: activeTab === 'hotel' ? 'Hôtel' : 'Voiture',
      Destination__c: activeTab === 'hotel' ? destination : stationName,
      ArrivalDate__c: formatDateForSalesforce(check_in_date_str),
      DepartureDate__c: formatDateForSalesforce(check_out_date_str),
      age_du_conducteur__c: activeTab === 'voiture' ? req.body.ageDriver || '25+' : null,
      Lieu_de_prise_en_charge__c: activeTab === 'voiture' ? req.body.pickupLocation : null,
      Franchise_vehicule__c: activeTab === 'voiture' ? req.body.vehicleFranchise : null,
      Type_de_vehicule__c: activeTab === 'voiture' ? req.body.detailedVehicleType : null,
    };

    // Ajouter les champs spécifiques à l'hôtel
    if (activeTab === 'hotel') {
      opportunityData.HotelRating__c = rating || null;
      
      if (occupants) {
        opportunityData.NumberOfRooms__c = occupants.rooms || 1;
        opportunityData.NumberOfAdults__c = occupants.adults || 2;
        opportunityData.NumberOfChildren__c = occupants.children || 0;
        opportunityData.NumberOfBabies__c = occupants.babies || 0;
        
        if (occupants.childrenAges && occupants.childrenAges.length > 0) {
          opportunityData.ChildrenAges__c = occupants.childrenAges.join(', ');
        }
      }
      
      if (selectedOptions) {
        opportunityData.PoolRequired__c = selectedOptions.pool || false;
        opportunityData.BreakfastRequired__c = selectedOptions.breakfast || false;
        opportunityData.NearBeachRequired__c = selectedOptions.nearBeach || false;
      }
      
      if (souhaite_hotel_en_particulier) {
        opportunityData.SpecificHotel__c = souhaite_hotel_en_particulier;
      }
    } 
    // Ajouter les champs spécifiques à la voiture
    else {
      if (selectedVehicle && selectedVehicle["Nom du véhicule"]) {
        opportunityData.VehicleModel__c = selectedVehicle["Nom du véhicule"];
      }
      
      if (pickupTime) opportunityData.PickupTime__c = pickupTime;
      if (returnTime) opportunityData.ReturnTime__c = returnTime;
      if (driverAge) opportunityData.DriverAge__c = driverAge;
      if (hasVisa !== undefined) opportunityData.HasVisaPremier__c = hasVisa;
      if (shomer_shabbat !== undefined) opportunityData.ShomerShabbat__c = shomer_shabbat;
    }

    // Créer l'opportunité
    const oppResult = await conn.sobject('Opportunity').create(opportunityData);

    if (!oppResult.success) {
      console.error('[CreateOpportunity] Erreur:', oppResult.errors);
      return res.status(500).json({
        error: 'Erreur création opportunité',
        detail: oppResult.errors
      });
    }

    console.log('[CreateOpportunity] Succès:', oppResult.id);
    
    return res.status(200).json({
      success: true,
      opportunityId: oppResult.id,
    });

  } catch (error: any) {
    console.error('[CreateOpportunity] Exception:', error);
    return res.status(500).json({
      error: 'Erreur générale serveur (opportunité)',
      detail: error.message,
    });
  }
}