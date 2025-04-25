import React, { useState } from 'react';
import SEOHead from './SEOHead';
import Header from './Header';
import Footer from './Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const handleNavigate = (path: string) => {
    console.log(`Navigating to: ${path}`);
  };

  const questions = [
    {
      question: "Comment puis-je réserver une voiture de location ?",
      answer: (
        <>
          <p>Pour réserver votre voiture de vacances, rien de plus simple !</p>
          <p>Contactez-nous via WhatsApp <a href="https://wa.me/972584140489" target="_blank" className="text-blue-600 underline">ici</a> ou par mail à <a href="mailto:contact@elynortours.com" className="text-blue-600 underline">contact@elynortours.com</a> en précisant :</p>
          <ul className="list-disc ml-5">
            <li>Vos dates de vacances</li>
            <li>Votre âge</li>
            <li>Le type de véhicule souhaité</li>
            <li>L’assurance choisie</li>
          </ul>
          <p className="mt-2">Ou appelez-nous au 01 82 83 67 29 (9h30 - 19h).</p>
        </>
      )
    },
    {
      question: "Quels documents sont nécessaires pour louer une voiture ?",
      answer: (
        <ul className="list-disc ml-5">
          <li>Un passeport valide</li>
          <li>Un permis de conduire valide depuis plus de 2 ans</li>
          <li>Une carte de crédit internationale (au nom du conducteur)</li>
        </ul>
      )
    },
    {
      question: "Dois-je souscrire une assurance ?",
      answer: (
        <>
          <p>Oui, une assurance est obligatoire. Nous vous proposons deux types d’assurance :</p>
          <ul className="list-disc ml-5">
            <li><strong>Assurance standard</strong> : incluse dans le tarif, avec franchise.</li>
            <li><strong>Assurance premium</strong> : sans franchise, couverture complète (vol, dommages, etc.).</li>
          </ul>
        </>
      )
    },
    {
      question: "Y a-t-il une limite d’âge pour louer une voiture ?",
      answer: (
        <p>Oui, le conducteur doit être âgé d’au moins 21 ans. Certains véhicules exigent un âge minimum de 25 ans.</p>
      )
    },
    {
      question: "Puis-je ajouter un conducteur supplémentaire ?",
      answer: (
        <p>Oui, vous pouvez ajouter un ou plusieurs conducteurs supplémentaires moyennant un petit supplément journalier. Tous les conducteurs doivent présenter leurs documents.</p>
      )
    },
    {
      question: "Puis-je louer un GPS ou un siège bébé ?",
      answer: (
        <>
          <p>Oui, sur demande à la réservation. Nous vous proposons :</p>
          <ul className="list-disc ml-5">
            <li>Siège bébé</li>
            <li>Siège rehausseur</li>
            <li>GPS</li>
            <li>Wi-Fi mobile</li>
          </ul>
        </>
      )
    },
    {
      question: "Quelles sont les conditions d’annulation ?",
      answer: (
        <p>En cas d’annulation jusqu’à 48h avant la prise en charge du véhicule, vous serez intégralement remboursé. Passé ce délai, des frais peuvent s’appliquer.</p>
      )
    },
    {
      question: "Puis-je louer une voiture pour le Chabbat uniquement ?",
      answer: (
        <p>Oui, nous proposons des locations pour Shabbat uniquement, avec des horaires adaptés et une tarification spéciale. Contactez-nous pour plus d’infos.</p>
      )
    },
    {
      question: "Acceptez-vous les cartes Visa Premier ?",
      answer: (
        <p>Oui ! La plupart de nos partenaires acceptent la carte Visa Premier. Cela peut aussi couvrir votre assurance selon les conditions de votre banque.</p>
      )
    },
    {
      question: "Est-ce moins cher que Booking ou Rentalcars ?",
      answer: (
        <p>Oui ! En passant par ElynorTours, vous bénéficiez de tarifs négociés avec nos partenaires locaux, souvent <strong>10 à 30 % moins chers</strong> que les plateformes grand public.</p>
      )
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEOHead
        title="FAQ - Location de Voiture Elynortours"
        description="Trouvez les réponses à vos questions fréquentes sur la location de voiture avec Elynortours."
        keywords="FAQ location voiture, Elynortours"
        canonicalUrl="https://elynortours.com/faq"
      />
      <Header />

      {/* Replace main with the new section */}
      <section className="bg-[#D71940] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-white mb-10">Vous trouverez ici les réponses aux questions les plus fréquentes</p>

          {/* Questions grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {questions.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleAnswer(index)}
                className="cursor-pointer transition-transform transform hover:scale-[1.01] hover:shadow-lg bg-white rounded-lg p-6"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">{item.question}</h2>
                  {openIndex === index ? (
                    <ChevronUp className="text-gray-600" />
                  ) : (
                    <ChevronDown className="text-gray-600" />
                  )}
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[1000px] mt-3 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-sm text-gray-700 mt-2">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer navigateTo={handleNavigate} />
    </>
  );
};

export default FAQ;
