import React, { useState } from 'react';
import { Hotel, Car, Umbrella, Phone, Mail, MapPin, Star, ChevronRight, Users, Menu, X } from 'lucide-react';
import HotelBookingForm from './Formulaire.tsx'; 
import logoImg from '/LOGO.webp';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('hotel');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (hash: string) => {
    window.location.hash = hash;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logoImg} alt="Elynor Tours" className="h-12 mr-3" />
            <div className="hidden md:block">
              <h1 className="text-orange-500 font-bold text-xl">ELYNOR TOURS</h1>
              <p className="text-gray-600 text-sm">Votre spécialiste des voyages en Israël</p>
            </div>
          </div>
          
          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
            <a href="#destinations" className="text-gray-700 hover:text-orange-500 transition-colors">Destinations</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
            
            {/* Navigation vers les autres applications */}
            <div className="pl-6 border-l border-gray-200 flex space-x-3">
              <button 
                onClick={() => navigateTo('mediterranean-beaches')}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-rose-500 border border-rose-500 hover:bg-rose-50 transition-colors"
              >
                Plages Méditerranée
              </button>
              <button 
                onClick={() => navigateTo('dead-sea-beaches')}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-orange-500 border border-orange-500 hover:bg-orange-50 transition-colors"
              >
                Plages Mer Morte
              </button>
              <button 
                onClick={() => navigateTo('car-rental')}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 transition-colors"
              >
                Location Voiture
              </button>
              <button 
                onClick={() => navigateTo('hotel-promotions')}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-fuchsia-500 border border-fuchsia-500 hover:bg-fuchsia-50 transition-colors"
              >
                Promotions Hôtels
              </button>
            </div>
          </nav>
        </div>
        
        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="container mx-auto px-4 pb-4 md:hidden">
            <div className="flex flex-col space-y-3">
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors py-2 border-b border-gray-100">Services</a>
              <a href="#destinations" className="text-gray-700 hover:text-orange-500 transition-colors py-2 border-b border-gray-100">Destinations</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors py-2 border-b border-gray-100">Contact</a>
              
              <div className="pt-2 grid grid-cols-2 gap-2">
                <button 
                  onClick={() => navigateTo('mediterranean-beaches')}
                  className="px-3 py-2 rounded-md text-sm font-medium bg-white text-rose-500 border border-rose-500 hover:bg-rose-50 transition-colors"
                >
                  Plages Méditerranée
                </button>
                <button 
                  onClick={() => navigateTo('dead-sea-beaches')}
                  className="px-3 py-2 rounded-md text-sm font-medium bg-white text-orange-500 border border-orange-500 hover:bg-orange-50 transition-colors"
                >
                  Plages Mer Morte
                </button>
                <button 
                  onClick={() => navigateTo('car-rental')}
                  className="px-3 py-2 rounded-md text-sm font-medium bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  Location Voiture
                </button>
                <button 
                  onClick={() => navigateTo('hotel-promotions')}
                  className="px-3 py-2 rounded-md text-sm font-medium bg-white text-fuchsia-500 border border-fuchsia-500 hover:bg-fuchsia-50 transition-colors"
                >
                  Promotions Hôtels
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/40"></div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Découvrez Israël avec<br />
                <span className="text-orange-400">Elynor Tours</span>
              </h2>
              <p className="text-xl text-white mb-8">
                Voyages sur mesure, excursions guidées et services de qualité pour une expérience inoubliable
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#booking" className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors flex items-center">
                  Réserver maintenant
                  <ChevronRight className="ml-2" size={20} />
                </a>
                <a href="#services" className="px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Nos services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Nos Services</h2>
            <p className="text-gray-600 mt-2">Une gamme complète de services pour votre séjour en Israël</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Hotel className="text-orange-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Réservation d'Hôtels</h3>
              <p className="text-gray-600 mb-4">
                Nous proposons une sélection des meilleurs hôtels d'Israël à des tarifs négociés. Profitez d'un service personnalisé et d'une assistance 24/7.
              </p>
              <button 
                onClick={() => navigateTo('hotel-promotions')} 
                className="text-orange-500 font-medium flex items-center hover:text-orange-600"
              >
                Voir nos promotions hôtelières <ChevronRight size={18} className="ml-1" />
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Car className="text-rose-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location de Voitures</h3>
              <p className="text-gray-600 mb-4">
                Explorez Israël en toute liberté avec notre service de location de voitures. Des véhicules récents et bien entretenus à des prix compétitifs.
              </p>
              <button 
                onClick={() => navigateTo('car-rental')} 
                className="text-rose-500 font-medium flex items-center hover:text-rose-600"
              >
                Voir nos offres de location <ChevronRight size={18} className="ml-1" />
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Umbrella className="text-blue-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Plages & Excursions</h3>
              <p className="text-gray-600 mb-4">
                Découvrez les plus belles plages d'Israël ou participez à nos excursions guidées. Nous vous proposons des expériences uniques pour tous les goûts.
              </p>
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => navigateTo('mediterranean-beaches')} 
                  className="text-blue-500 font-medium flex items-center hover:text-blue-600"
                >
                  Plages Méditerranée <ChevronRight size={18} className="ml-1" />
                </button>
                <button 
                  onClick={() => navigateTo('dead-sea-beaches')} 
                  className="text-orange-500 font-medium flex items-center hover:text-orange-600"
                >
                  Plages Mer Morte <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section id="booking" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Réservation en ligne</h2>
            <p className="text-gray-600 mt-2">Réservez votre hébergement et vos services en quelques clics</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button 
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'hotel' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('hotel')}
              >
                <Hotel size={18} className="inline mr-2" />
                Réservation Hôtel
              </button>
              <button 
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'car' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('car')}
              >
                <Car size={18} className="inline mr-2" />
                Location Voiture
              </button>
              <button 
                className={`flex-1 py-4 text-center font-medium ${activeTab === 'tour' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('tour')}
              >
                <Umbrella size={18} className="inline mr-2" />
                Excursions
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'hotel' && (
                <div className="max-h-[800px] overflow-auto">
                  <HotelBookingForm />
                </div>
              )}
              
              {activeTab === 'car' && (
                <div className="py-12 text-center">
                  <Car size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Location de Voiture</h3>
                  <p className="text-gray-600 mb-4">
                    Découvrez notre sélection de véhicules et nos conseils pour la location.
                  </p>
                  <button 
                    onClick={() => navigateTo('car-rental')} 
                    className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Voir nos offres de location
                  </button>
                </div>
              )}
              
              {activeTab === 'tour' && (
                <div className="py-12 text-center">
                  <Umbrella size={48} className="text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Plages et Excursions</h3>
                  <p className="text-gray-600 mb-4">
                    Explorez les plus belles plages d'Israël et découvrez nos excursions.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                    <button 
                      onClick={() => navigateTo('mediterranean-beaches')} 
                      className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-colors"
                    >
                      Plages Méditerranée
                    </button>
                    <button 
                      onClick={() => navigateTo('dead-sea-beaches')} 
                      className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Plages Mer Morte
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Destinations Section */}
      <section id="destinations" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Destinations Populaires</h2>
            <p className="text-gray-600 mt-2">Découvrez les plus beaux endroits d'Israël</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}></div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Jérusalem</h3>
                <div className="flex items-center mb-2">
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <span className="ml-2 text-sm text-gray-500">5.0 (238 avis)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  La ville sainte aux trois religions, riche en histoire et en culture.
                </p>
                <a href="#" className="text-orange-500 font-medium flex items-center hover:text-orange-600">
                  Explorer <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1710732/pexels-photo-1710732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}></div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Tel Aviv</h3>
                <div className="flex items-center mb-2">
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <span className="ml-2 text-sm text-gray-500">4.9 (192 avis)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  La ville qui ne dort jamais, avec ses plages, sa vie nocturne et son architecture Bauhaus.
                </p>
                <button
                  onClick={() => navigateTo('mediterranean-beaches')} 
                  className="text-orange-500 font-medium flex items-center hover:text-orange-600"
                >
                  Explorer <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}></div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Mer Morte</h3>
                <div className="flex items-center mb-2">
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  <span className="ml-2 text-sm text-gray-500">4.8 (164 avis)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Le point le plus bas de la Terre, célèbre pour ses propriétés thérapeutiques.
                </p>
                <button
                  onClick={() => navigateTo('dead-sea-beaches')} 
                  className="text-orange-500 font-medium flex items-center hover:text-orange-600"
                >
                  Explorer <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              Voir toutes les destinations
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Ce que disent nos clients</h2>
            <p className="text-gray-600 mt-2">Des voyageurs satisfaits qui nous font confiance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  SM
                </div>
                <div>
                  <h4 className="font-medium">Sophie Martin</h4>
                  <div className="flex text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Un service exceptionnel ! Notre séjour à Jérusalem était parfaitement organisé, de l'hôtel aux excursions. Elynor Tours a su répondre à toutes nos attentes avec professionnalisme."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  PD
                </div>
                <div>
                  <h4 className="font-medium">Pierre Dubois</h4>
                  <div className="flex text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "La location de voiture était parfaite, le véhicule était en excellent état et la prise en charge à l'aéroport très efficace. Je recommande vivement cette agence pour découvrir Israël."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-bold mr-4">
                  CL
                </div>
                <div>
                  <h4 className="font-medium">Claire Leroy</h4>
                  <div className="flex text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Notre guide francophone était incroyable, très cultivé et attentionné. L'hôtel proposé à Tel Aviv offrait une vue magnifique et un service irréprochable. Merci Elynor Tours !"
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Contactez-nous</h2>
            <p className="text-gray-600 mt-2">Notre équipe est à votre disposition pour répondre à vos questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Nos coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="text-orange-500 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-gray-600">+972 584 140 489</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-orange-500 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@elynortours.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-orange-500 mt-1 mr-3" size={20} />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">Tel Aviv, Israël</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Horaires d'ouverture</h3>
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-medium">Lundi - Jeudi</td>
                    <td className="py-2">9h00 - 18h00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 pr-4 font-medium">Vendredi</td>
                    <td className="py-2">9h00 - 15h00</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Dimanche</td>
                    <td className="py-2">9h00 - 18h00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Envoyez-nous un message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Votre email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={logoImg} alt="Elynor Tours" className="h-10 mr-3" />
                <h3 className="text-xl font-bold">ELYNOR TOURS</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Votre spécialiste des voyages en Israël depuis 2015, offrant des services personnalisés et de qualité.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Navigation Footer */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#destinations" className="text-gray-400 hover:text-white transition-colors">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#booking" className="text-gray-400 hover:text-white transition-colors">
                    Réservation
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Plages Footer */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Plages</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => navigateTo('mediterranean-beaches')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Plages Méditerranée
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('dead-sea-beaches')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Plages Mer Morte
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Autres Services Footer */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Autres Services</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => navigateTo('car-rental')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Location de voiture
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateTo('hotel-promotions')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Promotions hôtelières
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Elynor Tours. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;