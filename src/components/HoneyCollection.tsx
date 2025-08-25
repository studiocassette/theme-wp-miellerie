import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, Award, MapPin } from 'lucide-react';
import honeyCollection from '@/assets/honey-collection.jpg';

const HoneyCollection = () => {
  const honeyTypes = [
    {
      name: "Miel de Lavande",
      description: "Doux et parfumé, aux notes florales subtiles de la lavande provençale",
      color: "bg-purple-100 border-purple-300 text-purple-800",
      labelColor: "Étiquette violette",
      usage: "Idéal sur les tartines et dans les tisanes"
    },
    {
      name: "Miel de Garrigue",
      description: "Caractère authentique des plantes sauvages méditerranéennes",
      color: "bg-green-100 border-green-300 text-green-800",
      labelColor: "Étiquette verte",
      usage: "Parfait avec les fromages de chèvre"
    },
    {
      name: "Miel de Châtaignier",
      description: "Puissant et corsé, aux notes boisées et légèrement amères",
      color: "bg-red-100 border-red-300 text-red-800",
      labelColor: "Étiquette bordeaux",
      usage: "Excellent dans les plats salés"
    },
    {
      name: "Miel de Romarin",
      description: "Cristallisé fin, au goût délicat et aux vertus digestives",
      color: "bg-yellow-100 border-yellow-300 text-yellow-800",
      labelColor: "Étiquette jaune",
      usage: "Idéal pour la cuisine méditerranéenne"
    },
    {
      name: "Miel de Montagne",
      description: "Mélange complexe des fleurs d'altitude aux saveurs intenses",
      color: "bg-red-100 border-red-400 text-red-800",
      labelColor: "Étiquette rouge",
      usage: "Parfait nature ou avec du pain complet"
    },
    {
      name: "Miel de Lavande Fine",
      description: "La quintessence de la lavande, récolte d'exception des hauts plateaux",
      color: "bg-blue-100 border-blue-300 text-blue-800",
      labelColor: "Étiquette bleu clair",
      usage: "Dégustation pure recommandée"
    },
    {
      name: "Miel de Fleurs de Provence",
      description: "Symphonie florale de tout le terroir provençal, récolte multifleurs",
      color: "bg-indigo-100 border-indigo-400 text-indigo-800",
      labelColor: "Étiquette bleu marine",
      usage: "Polyvalent pour tous usages"
    }
  ];

  return (
    <section id="miels" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Miels d'Exception
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Sept variétés uniques, chacune révélant les secrets des terroirs provençaux. 
            Récoltés avec passion et certifiés Agriculture Biologique.
          </p>
          
          {/* Image */}
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src={honeyCollection} 
              alt="Collection des miels de la Miellerie du Montaiguet avec leurs étiquettes colorées"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-elegant"
            />
          </div>
        </div>

        {/* Honey Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {honeyTypes.map((honey, index) => (
            <Card key={index} className="hover:shadow-provence transition-smooth group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg font-semibold">{honey.name}</CardTitle>
                  <Badge className={honey.color} variant="outline">
                    {honey.labelColor}
                  </Badge>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {honey.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Leaf className="h-4 w-4 mr-2 text-accent" />
                    <span>{honey.usage}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    <span>Format 500g • Bio • IGP</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                  >
                    En savoir plus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Vente directe à la miellerie</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Retrouvez tous nos miels chez nos revendeurs partenaires ou directement à la miellerie
          </p>
          <Button size="lg" className="gradient-honey text-primary-foreground hover:shadow-honey transition-smooth">
            Trouver un point de vente
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HoneyCollection;