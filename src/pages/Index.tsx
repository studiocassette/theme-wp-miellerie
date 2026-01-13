import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, MapPin, Phone, Mail, Clock, Leaf, Star } from 'lucide-react';
import logo from '@/assets/logo-miellerie.png';
import heroImage from '@/assets/hero-antoine-apiculteur.jpg';
import honeyCollection from '@/assets/honey-collection.jpg';

const Index = () => {
  const honeyTypes = [
    {
      name: "Miel de Lavande",
      description: "Doux et parfumé, aux notes florales subtiles de la lavande provençale",
      color: "bg-purple-100 border-purple-300 text-purple-800",
      usage: "Idéal sur les tartines et dans les tisanes"
    },
    {
      name: "Miel de Garrigue",
      description: "Caractère authentique des plantes sauvages méditerranéennes",
      color: "bg-green-100 border-green-300 text-green-800",
      usage: "Parfait avec les fromages de chèvre"
    },
    {
      name: "Miel de Châtaignier",
      description: "Puissant et corsé, aux notes boisées et légèrement amères",
      color: "bg-amber-100 border-amber-300 text-amber-800",
      usage: "Excellent dans les plats salés"
    },
    {
      name: "Miel de Romarin",
      description: "Cristallisé fin, au goût délicat et aux vertus digestives",
      color: "bg-yellow-100 border-yellow-300 text-yellow-800",
      usage: "Idéal pour la cuisine méditerranéenne"
    },
    {
      name: "Miel de Montagne",
      description: "Mélange complexe des fleurs d'altitude aux saveurs intenses",
      color: "bg-red-100 border-red-400 text-red-800",
      usage: "Parfait nature ou avec du pain complet"
    },
    {
      name: "Miel de Fleurs de Provence",
      description: "Symphonie florale de tout le terroir provençal",
      color: "bg-indigo-100 border-indigo-400 text-indigo-800",
      usage: "Polyvalent pour tous usages"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section avec Logo Grand */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Antoine Riondet, apiculteur de la Miellerie du Montaiguet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            {/* Logo Grand */}
            <div className="mb-8">
              <img 
                src={logo} 
                alt="Miellerie du Montaiguet" 
                className="h-32 md:h-40 lg:h-48 w-auto"
              />
            </div>

            {/* Badge Lauréat */}
            <div className="flex items-center space-x-2 mb-6">
              <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30 flex items-center space-x-1">
                <Award className="h-4 w-4" />
                <span>Lauréat 2025</span>
              </Badge>
              <p className="text-sm text-muted-foreground">
                Prix Agricole des Produits de Provence
              </p>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Miel 100% Bio
              <span className="block font-serif text-secondary">
                de Provence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Découvrez nos miels d'exception, récoltés dans les plus beaux terroirs de Provence par Antoine Riondet, apiculteur passionné depuis 3 générations.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Badge variant="outline" className="border-secondary text-secondary bg-secondary/10">
                IGP Miels de Provence
              </Badge>
              <Badge variant="outline" className="border-primary text-primary bg-primary/5">
                Agriculture Biologique
              </Badge>
              <Badge variant="outline" className="border-primary text-primary bg-primary/5">
                FR-BIO-16
              </Badge>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 mb-8 text-muted-foreground">
              <MapPin className="h-5 w-5 text-secondary" />
              <span>3357 chemin de la plaine du Montaiguet, 13590 Meyreuil</span>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Star className="h-5 w-5 text-secondary" />
                </div>
                <span className="font-medium">300 ruches</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Award className="h-5 w-5 text-secondary" />
                </div>
                <span className="font-medium">7 variétés de miel</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <span className="font-medium">Toute la Provence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Miels */}
      <section id="miels" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Miels d'Exception
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Six variétés uniques, chacune révélant les secrets des terroirs provençaux. 
              Récoltés avec passion et certifiés Agriculture Biologique.
            </p>
            
            {/* Image Collection */}
            <div className="max-w-4xl mx-auto mb-12">
              <img 
                src={honeyCollection} 
                alt="Collection des miels de la Miellerie du Montaiguet"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </div>

          {/* Honey Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {honeyTypes.map((honey, index) => (
              <Card key={index} className="hover:shadow-provence transition-smooth group border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">{honey.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {honey.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Leaf className="h-4 w-4 mr-2 text-secondary" />
                      <span>{honey.usage}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Award className="h-4 w-4 mr-2 text-secondary" />
                      <span>Format 500g • Bio • IGP</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-6 py-3">
              <MapPin className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-medium">Vente directe à la miellerie sur rendez-vous</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Logo & Description */}
            <div>
              <div className="mb-6">
                <img 
                  src={logo} 
                  alt="Miellerie du Montaiguet" 
                  className="h-20 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-primary-foreground/80 mb-6">
                Depuis trois générations, nous produisons des miels d'exception 
                dans le respect des traditions apicoles provençales.
              </p>
              <div className="flex space-x-4">
                <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center text-secondary font-bold">
                  AB
                </div>
                <div className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center text-secondary text-xs font-bold">
                  IGP
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-xl mb-6 text-primary-foreground">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-secondary" />
                  <div>
                    <p className="text-primary-foreground/80">3357 chemin de la plaine</p>
                    <p className="text-primary-foreground/80">du Montaiguet</p>
                    <p className="text-primary-foreground/80">13590 Meyreuil</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span className="text-primary-foreground/80">04 42 58 XX XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span className="text-primary-foreground/80">contact@miellerie-montaiguet.fr</span>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div>
              <h4 className="font-semibold text-xl mb-6 text-primary-foreground">Vente directe</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 mt-0.5 text-secondary" />
                  <div>
                    <p className="text-primary-foreground/80 font-medium">Sur rendez-vous</p>
                    <p className="text-primary-foreground/60 text-sm">Appelez-nous pour visiter la miellerie</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-primary mt-4"
                >
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-primary-foreground/60 text-center md:text-left">
                <p>&copy; 2025 Miellerie du Montaiguet. Tous droits réservés.</p>
                <p>Récolté et mis en pot par l'apiculteur • Agriculture Biologique FR-BIO-16</p>
              </div>
              <div className="flex space-x-6 text-sm">
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
