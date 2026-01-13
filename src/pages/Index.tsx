import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, MapPin, Phone, Mail, Clock, Leaf, Star, Calendar, ArrowRight, Store, ShoppingBag } from 'lucide-react';
import logo from '@/assets/logo-miellerie.png';
import heroImage from '@/assets/hero-antoine-apiculteur.jpg';
import honeyCollection from '@/assets/honey-collection.jpg';
import StoreMap from '@/components/StoreMap';
import SiteHeader from '@/components/SiteHeader';

const Index = () => {
  const [selectedStore, setSelectedStore] = useState<number | null>(null);
  const honeyTypes = [
    {
      name: "Miel de Lavande",
      description: "Doux et parfumé, aux notes florales subtiles de la lavande provençale",
      icon: "🌸",
      usage: "Idéal sur les tartines et dans les tisanes"
    },
    {
      name: "Miel de Garrigue",
      description: "Caractère authentique des plantes sauvages méditerranéennes",
      icon: "🌿",
      usage: "Parfait avec les fromages de chèvre"
    },
    {
      name: "Miel de Châtaignier",
      description: "Puissant et corsé, aux notes boisées et légèrement amères",
      icon: "🌰",
      usage: "Excellent dans les plats salés"
    },
    {
      name: "Miel de Romarin",
      description: "Cristallisé fin, au goût délicat et aux vertus digestives",
      icon: "🌱",
      usage: "Idéal pour la cuisine méditerranéenne"
    },
    {
      name: "Miel de Montagne",
      description: "Mélange complexe des fleurs d'altitude aux saveurs intenses",
      icon: "⛰️",
      usage: "Parfait nature ou avec du pain complet"
    },
    {
      name: "Miel de Fleurs de Provence",
      description: "Symphonie florale de tout le terroir provençal",
      icon: "🌻",
      usage: "Polyvalent pour tous usages"
    }
  ];

  const stores = [
    {
      id: 1,
      name: "La Miellerie du Montaiguet",
      address: "3357 chemin de la plaine du Montaiguet, 13590 Meyreuil",
      type: "Vente directe",
      hours: "Sur rendez-vous",
      icon: Store,
      lat: 43.4656,
      lng: 5.5012
    },
    {
      id: 2,
      name: "Marché d'Aix-en-Provence",
      address: "Place Richelme, 13100 Aix-en-Provence",
      type: "Marché",
      hours: "Mardi, Jeudi, Samedi : 8h-13h",
      icon: ShoppingBag,
      lat: 43.5283,
      lng: 5.4474
    },
    {
      id: 3,
      name: "Biocoop Aix-en-Provence",
      address: "25 Avenue des Belges, 13100 Aix-en-Provence",
      type: "Magasin",
      hours: "Lun-Sam : 9h-19h30",
      icon: Store,
      lat: 43.5256,
      lng: 5.4512
    },
    {
      id: 4,
      name: "La Ferme du Tholonet",
      address: "Route de Cézanne, 13100 Le Tholonet",
      type: "Magasin",
      hours: "Mar-Dim : 9h-18h",
      icon: Store,
      lat: 43.5195,
      lng: 5.5134
    }
  ];

  const blogPosts = [
    {
      title: "Prix Agricole 2025 : Notre Miel de Lavande Primé",
      excerpt: "Nous sommes fiers d'annoncer que notre miel de lavande a été récompensé par le Prix Agricole des Produits de Provence 2025...",
      date: "12 Janvier 2025",
      category: "Récompense",
      image: "🏆"
    },
    {
      title: "Préparation de la Saison Apicole 2025",
      excerpt: "Avec le retour des beaux jours, nos abeilles se préparent pour une nouvelle saison de butinage dans les champs de lavande...",
      date: "28 Décembre 2024",
      category: "Actualité",
      image: "🐝"
    },
    {
      title: "Les Bienfaits du Miel de Romarin",
      excerpt: "Découvrez pourquoi le miel de romarin est particulièrement recommandé pour ses vertus digestives et ses propriétés uniques...",
      date: "15 Décembre 2024",
      category: "Santé",
      image: "🌱"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Antoine Riondet, apiculteur de la Miellerie du Montaiguet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <div className="mb-8 animate-fade-in">
              <img 
                src={logo} 
                alt="Miellerie du Montaiguet" 
                className="h-36 md:h-44 lg:h-52 w-auto drop-shadow-lg"
              />
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <Badge className="bg-secondary text-secondary-foreground border-none px-4 py-1.5 text-sm font-medium flex items-center gap-2">
                <Award className="h-4 w-4" />
                Lauréat 2025
              </Badge>
              <span className="text-muted-foreground text-sm">
                Prix Agricole des Produits de Provence
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Miel Artisanal
              <span className="block font-serif text-secondary mt-2">
                100% Bio de Provence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Découvrez nos miels d'exception, récoltés avec passion dans les plus beaux terroirs de Provence par Antoine Riondet, apiculteur depuis 3 générations.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Badge variant="outline" className="border-secondary/50 text-secondary bg-secondary/10 px-3 py-1">
                IGP Miels de Provence
              </Badge>
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5 px-3 py-1">
                Agriculture Biologique
              </Badge>
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/5 px-3 py-1">
                FR-BIO-16
              </Badge>
            </div>

            <div className="flex flex-wrap gap-8 text-sm">
              {[
                { icon: Star, label: "300 ruches" },
                { icon: Award, label: "7 variétés" },
                { icon: MapPin, label: "Provence" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="font-medium text-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-secondary rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Section Nos Miels */}
      <section id="miels" className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/20 text-secondary border-none mb-4">Notre Collection</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nos Miels d'Exception
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six variétés uniques révélant les secrets des terroirs provençaux, 
              récoltées avec passion et certifiées Agriculture Biologique.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={honeyCollection} 
                alt="Collection des miels de la Miellerie du Montaiguet"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-serif text-xl md:text-2xl">
                  "Le miel est le reflet du terroir et du travail des abeilles"
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {honeyTypes.map((honey, index) => (
              <Card key={index} className="group hover:shadow-honey transition-smooth border-none bg-card/80 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-3xl mb-2 block">{honey.icon}</span>
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-secondary transition-smooth">
                        {honey.name}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground mt-2">
                    {honey.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Leaf className="h-4 w-4 text-secondary" />
                    <span>{honey.usage}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-secondary">
                    <Award className="h-3 w-3" />
                    <span>500g • Bio • IGP Provence</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Points de Vente */}
      <section id="points-de-vente" className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/20 text-primary border-none mb-4">Où Nous Trouver</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Points de Vente
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Retrouvez nos miels directement à la miellerie, sur les marchés 
              et chez nos partenaires revendeurs en Provence.
            </p>
          </div>

          {/* Carte Interactive */}
          <div className="mb-12">
            <StoreMap 
              stores={stores} 
              selectedStore={selectedStore}
              onSelectStore={setSelectedStore}
            />
          </div>

          {/* Liste des Points de Vente */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {stores.map((store) => (
              <Card 
                key={store.id} 
                className={`group cursor-pointer transition-smooth border-2 overflow-hidden ${
                  selectedStore === store.id 
                    ? 'border-secondary shadow-honey bg-secondary/5' 
                    : 'border-transparent hover:shadow-honey bg-card'
                }`}
                onClick={() => setSelectedStore(store.id)}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-smooth ${
                      selectedStore === store.id ? 'bg-secondary' : 'bg-secondary/20'
                    }`}>
                      <store.icon className={`h-5 w-5 transition-smooth ${
                        selectedStore === store.id ? 'text-secondary-foreground' : 'text-secondary'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold mb-1 transition-smooth ${
                        selectedStore === store.id ? 'text-secondary' : 'text-foreground group-hover:text-secondary'
                      }`}>
                        {store.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 truncate">{store.address}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs border-secondary/30 text-secondary">
                          {store.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {store.hours}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg rounded-xl shadow-honey">
              <Phone className="h-5 w-5 mr-2" />
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </section>

      {/* Section Blog / Actualités */}
      <section id="blog" className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/20 text-secondary border-none mb-4">Actualités</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Notre Blog
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Suivez nos aventures apicoles, découvrez nos conseils 
              et restez informés de nos dernières actualités.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth border-none bg-card overflow-hidden cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center">
                  <span className="text-6xl">{post.image}</span>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs border-secondary/30 text-secondary">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-secondary transition-smooth line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-secondary text-sm font-medium group-hover:gap-2 transition-all">
                    Lire la suite <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="lg:col-span-2">
              <img 
                src={logo} 
                alt="Miellerie du Montaiguet" 
                className="h-24 w-auto brightness-0 invert mb-6"
              />
              <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
                Depuis trois générations, nous produisons des miels d'exception 
                dans le respect des traditions apicoles provençales et du bien-être de nos abeilles.
              </p>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary/30 flex items-center justify-center text-secondary font-bold text-sm">
                  AB
                </div>
                <div className="h-12 w-12 rounded-full bg-secondary/30 flex items-center justify-center text-secondary text-xs font-bold">
                  IGP
                </div>
                <div className="h-12 w-12 rounded-full bg-secondary/30 flex items-center justify-center text-secondary text-xs font-bold">
                  BIO
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-xl mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-secondary" />
                  <div className="text-primary-foreground/80 text-sm">
                    <p>3357 chemin de la plaine</p>
                    <p>du Montaiguet</p>
                    <p>13590 Meyreuil</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span className="text-primary-foreground/80 text-sm">04 42 58 XX XX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span className="text-primary-foreground/80 text-sm">contact@miellerie-montaiguet.fr</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-xl mb-6">Vente directe</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-0.5 text-secondary" />
                  <div>
                    <p className="text-primary-foreground/80 font-medium text-sm">Sur rendez-vous</p>
                    <p className="text-primary-foreground/60 text-xs mt-1">Appelez-nous pour visiter</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-primary w-full"
                >
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-primary-foreground/60 text-center md:text-left">
                <p>&copy; 2025 Miellerie du Montaiguet. Tous droits réservés.</p>
                <p className="text-xs mt-1">Récolté et mis en pot par l'apiculteur • Agriculture Biologique FR-BIO-16</p>
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
                  Mentions légales
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
