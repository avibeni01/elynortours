import React from 'react';
import SEOHead from './SEOHead'; // Import SEOHead
import Header from './Header';   // Import Header
import Footer from './Footer';   // Import Footer

const FAQ: React.FC = () => {
  // Placeholder navigateTo function - replace with actual navigation logic if available
  const handleNavigate = (path: string) => {
    console.log(`Navigating to: ${path}`);
    // In a real application, you would use your routing library here
    // e.g., history.push(path) or navigate(path)
  };

  return (
    <> {/* Use Fragment to wrap multiple elements */}
      <SEOHead
        title="FAQ - Location de Voiture Elynortours"
        description="Trouvez les réponses à vos questions fréquentes sur la location de voiture avec Elynortours : réservation, âge minimum, permis, documents, assurances, paiement, etc."
        keywords="FAQ location voiture, questions fréquentes location voiture, Elynortours FAQ, réserver voiture, assurance location voiture, conditions location voiture"
        canonicalUrl="https://elynortours.com/faq" // Assuming this is the canonical URL
      />
      <Header /> {/* Add Header */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Foire Aux Questions (FAQ)</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Comment puis-je réserver une voiture de location ?</h2>
            <p className="text-gray-700">
              Pour réserver votre voiture de vacances, rien de plus simple!
              Vous n’avez qu’à contacter notre agence Elynortours par whatsapp <a href="https://wa.me/972584140489" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://wa.me/972584140489</a> ou par mail <a href="mailto:contact@elynortours.com" className="text-blue-600 hover:underline">contact@elynortours.com</a> en nous écrivant:
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-700">
              <li>vos dates de vacances</li>
              <li>votre âge</li>
              <li>le type de véhicule souhaité</li>
              <li>l’assurance que vous voulez</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Vous pouvez aussi téléphoner à notre agence au: 0182836729.
              Nos horaires d’ouverture sont de 9h30 à 19h.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">A partir de quel âge puis-je louer une voiture ?</h2>
            <p className="text-gray-700">
              Vous pouvez louer une voiture dès vos 18 ans.
              Mais jusqu’à 23 ans, vous êtes considérés jeune conducteur et devez payer une taxe de 5$ en plus par jour.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Combien d'année de permis faut-il pour louer une voiture ?</h2>
            <p className="text-gray-700">
              Pour louer une voiture, il faut que vous ayez minimum 1 an de permis.
              (Sauf avec le loueur Budget qui demande 2 ans.)
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Quelles informations l'agence de location a besoin pour confirmer la réservation ?</h2>
            <p className="text-gray-700">
              Rien de très compliqué.
              Pour confirmer la réservation, nous aurions besoin uniquement de votre nom, votre prénom et votre mail.
              Pour les véhicules de 7 places et plus, un numéro de carte de crédit sera demandé pour bloquer la réservation (mais rien ne sera débité).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Quels documents dois-je avoir sur moi pour récupérer la voiture à l'agence ?</h2>
            <p className="text-gray-700">
              Le jour où vous devez récupérer la voiture, présenter vous à l’agence indiquée avec les documents suivants :
              Votre passeport, votre permis de conduire et carte bleue à votre nom et bien entendu le bon de réservation.
              Si vous êtes en Israel en tant que touriste, présentez aussi le petit papier bleu que vous avez reçu à l’aéroport afin de ne pas payer la T.V.A.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Comment choisir mon assurance ?</h2>
            <p className="text-gray-700 mb-2">
              Lorsque vous louer votre voiture, vous avez plusieurs assurances au choix:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>
                <strong>L’assurance franchise:</strong> en cas d’accident, vous devriez payer à l’agence une participation au frais de réparation appelée franchise … entre 600$ et 1500$ par choc.
              </li>
              <li>
                <strong>L’assurance premier:</strong> si vous avez une carte premier avec assurance, vous avez la possibilité de ne pas prendre d’assurance loueur, en vous assurant uniquement par votre carte premier.
                Prenez en compte que vous devrez du coup avancer tous les frais de réparation de la voiture et après vous serez rembourse par votre carte bleue.
                De plus, vous devrez aussi payez une caution beaucoup plus importante.
              </li>
              <li>
                <strong>L’assurance tous risques:</strong> cette assurance vous garanti la sécurité en toutes circonstances. En cas d’accident, vous n’avez absolument rien à payer. Tout est prix en charge par l’agence.
                Mais cette sécurité vous coûte dans le prix de la location de la voiture 15$ en plus par jour.
                Cette assurance n’inclut pas les pneus et le pare-brise. Pour être assurés de ces derniers, vous payerez en plus 5$ par jour.
              </li>
            </ul>
            <p className="text-gray-700 mt-2">
              Voilà, vous savez tout sur les assurances… À vous de choisir!
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">A combien de kilomètres j'ai le droit ?</h2>
            <p className="text-gray-700">
              En général, vous avez le droit a 250 km par jour pour les locations de moins de 3 jours.
              A partir de 3 jours le kilométrage est illimité. Sauf avec l’agence Sixt ou Budget où c’est à partir d’une semaine.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Qu'est-ce que je dois payer et quand ?</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Lorsque vous confirmez la voiture avec ElynorsTours, vous ne payez rien.</li>
              <li>
                Lorsque vous récupérez la voiture, vous payez a l’agence une caution.
                Cette caution équivaut au prix de la location + le prix de la franchise + 200$.
                Si vous avez une carte bleue à débit direct, cette caution sera débitée de votre compte.
                Si vous avez une carte à débit différé, seulement le plafond de la carte sera bloqué et ensuite libéré à la fin de la réservation.
              </li>
              <li>
                Le paiement de la location se fait seulement lorsque vous rendez la voiture.
                Si vous avez été débité de la caution, vous n’aurez rien a payez et vous serez crédité du montant de la différence entre la caution et la location.
                Au tarif de base pourront s’ajouter des frais de dépassement de jours ou de kilomètres ainsi que les frais de franchise en cas d’accident.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">En cas d'accident. Que faire ?</h2>
            <p className="text-gray-700">
              Pas de panique ! Chacune de nos agences de location à un numéro d’urgence.
              Vous pouvez nous appeler ou nous envoyez un message pour nous demander ce numéro.
              En cas de besoin ou de difficulté avec la langue du pays, nous pourrons vous aider à vous faire comprendre à l’agence.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Informations supplémentaires</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Lorsque vous prenez une voiture à l’agence de location, vous la recevez avec le plein d’essence. Tâchez de la rendre dans le même état, sinon vous serez débité en plus.</li>
              <li>Il est strictement interdit de fumer dans les voitures de location.</li>
              <li>Vous pouvez louer un siège bébé ou siège auto avec la voiture pour un montant de 5$ par jour.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer navigateTo={handleNavigate} /> {/* Add Footer with navigateTo prop */}
    </> // Ensure closing fragment tag is correct
  );
};

export default FAQ;
