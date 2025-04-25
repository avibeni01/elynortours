// api/createSalesforceContact.tsx
import type { NextApiRequest, NextApiResponse } from 'next';
import jsforce from 'jsforce';

// Configuration de la connexion Salesforce
const SF_LOGIN_URL = process.env.VITE_SALESFORCE_LOGIN_URL || 'https://login.salesforce.com';
const SF_USERNAME = process.env.VITE_SALESFORCE_USERNAME;
const SF_PASSWORD = process.env.VITE_SALESFORCE_PASSWORD;
const SF_TOKEN = process.env.VITE_SALESFORCE_SECURITY_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  // Vérifier les identifiants Salesforce
  if (!SF_USERNAME || !SF_PASSWORD) {
    return res.status(500).json({ error: 'Identifiants Salesforce manquants' });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      preferences_client,
      nationalite = 'Français',
    } = req.body;

    console.log('🟢 Données reçues pour création de contact:', req.body);

    // Connexion à Salesforce
    const conn = new jsforce.Connection({
      loginUrl: SF_LOGIN_URL
    });

    // Authentification
    await conn.login(SF_USERNAME, SF_PASSWORD + (SF_TOKEN || ''));

    // Rechercher si le contact existe déjà
    const contactsFound = await conn.query(`
      SELECT Id FROM Contact 
      WHERE Email = '${email}' 
      LIMIT 1
    `);

    let contactId;

    if (contactsFound.records.length > 0) {
      // Contact existe déjà
      contactId = contactsFound.records[0].Id;
      console.log('🟡 Contact déjà existant. ID :', contactId);
    } else {
      // Créer un nouveau contact
      const contactResult = await conn.sobject('Contact').create({
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Phone: phone,
        Description: preferences_client,
        Nationality__c: nationalite
      });

      if (!contactResult.success) {
        console.error('🔴 Erreur création contact:', contactResult.errors);
        return res.status(500).json({
          error: 'Erreur création contact',
          detail: contactResult.errors
        });
      }

      contactId = contactResult.id;
      console.log('✅ Contact créé avec succès:', contactId);
    }

    return res.status(200).json({ success: true, contactId: contactId });

  } catch (error: any) {
    console.error('❌ Erreur générale création contact:', error.message);
    return res.status(500).json({
      error: 'Erreur générale Salesforce',
      detail: error.message,
    });
  }
}
