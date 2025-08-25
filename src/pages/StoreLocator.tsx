import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MapboxStoreLocator from '@/components/MapboxStoreLocator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';

const StoreLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Données des revendeurs (à remplacer par une API ou base de données)
  const stores = [
    {
      id: 1,
      name: "Marché de Meyreuil",
      address: "Place de la Mairie, 13590 Meyreuil",
      phone: "04 42 58 69 70",
      hours: "Samedi 8h-12h",
      lat: 43.4876,
      lng: 5.4962,
      type: "marché" as const
    },
    {
      id: 2,
      name: "Bio Coop Aix-en-Provence",
      address: "123 Avenue Victor Hugo, 13100 Aix-en-Provence",
      phone: "04 42 26 45 78",
      hours: "Lun-Sam 9h-19h",
      lat: 43.5297,
      lng: 5.4474,
      type: "magasin" as const
    },
    {
      id: 3,
      name: "Marché des Lices",
      address: "Place des Lices, 13100 Aix-en-Provence",
      phone: "",
      hours: "Mardi, Jeudi, Samedi 8h-13h",
      lat: 43.5314,
      lng: 5.4467,
      type: "marché" as const
    },
    {
      id: 4,
      name: "Miellerie du Montaiguet (Vente directe)",
      address: "3357 chemin de la plaine du Montaiguet, 13590 Meyreuil",
      phone: "06 12 34 56 78",
      hours: "Sur rendez-vous",
      lat: 43.4823,
      lng: 5.5012,
      type: "direct" as const
    }
  ];

  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-honey-light/20 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Où nous trouver
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Découvrez tous nos points de vente en Provence. Nos miels bio et IGP sont disponibles 
                dans de nombreux magasins et marchés de la région.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Rechercher par ville ou code postal..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button variant="default">
                  Rechercher
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Map and Store List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Map */}
              <div className="order-2 lg:order-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-honey" />
                      Carte des revendeurs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <MapboxStoreLocator stores={filteredStores} />
                  </CardContent>
                </Card>
              </div>

              {/* Store List */}
              <div className="order-1 lg:order-2">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Points de vente ({filteredStores.length})
                  </h2>
                  
                  {filteredStores.map((store) => (
                    <Card key={store.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-foreground mb-2">
                              {store.name}
                            </h3>
                            
                            <div className="space-y-2 text-muted-foreground">
                              <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 text-honey flex-shrink-0" />
                                <span className="text-sm">{store.address}</span>
                              </div>
                              
                              {store.phone && (
                                <div className="flex items-center gap-2">
                                  <Phone className="h-4 w-4 text-honey flex-shrink-0" />
                                  <span className="text-sm">{store.phone}</span>
                                </div>
                              )}
                              
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-honey flex-shrink-0" />
                                <span className="text-sm">{store.hours}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="ml-4">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              store.type === 'direct' 
                                ? 'bg-honey/20 text-honey-dark' 
                                : store.type === 'marché'
                                ? 'bg-lavender/20 text-lavender-dark'
                                : 'bg-garrigue/20 text-garrigue-dark'
                            }`}>
                              {store.type === 'direct' ? 'Vente directe' : 
                               store.type === 'marché' ? 'Marché' : 'Magasin'}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Direct Sale */}
        <section className="py-16 bg-gradient-to-r from-honey-light/10 to-lavender/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Vente directe à la miellerie
              </h2>
              <p className="text-muted-foreground mb-8">
                Venez nous rendre visite directement à la miellerie pour découvrir 
                tous nos miels et rencontrer Antoine, notre apiculteur passionné.
              </p>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-honey" />
                    <span>3357 chemin de la plaine du Montaiguet, 13590 Meyreuil</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-honey" />
                    <span>06 12 34 56 78</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-honey" />
                    <span>Sur rendez-vous uniquement</span>
                  </div>
                </div>
                <Button className="mt-6" size="lg">
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StoreLocator;