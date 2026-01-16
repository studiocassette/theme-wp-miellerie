import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const NewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Actualités
          </h2>
          <p className="text-lg text-muted-foreground">
            Suivez la vie de notre miellerie et nos dernières récompenses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main News Card - Prix Agricole 2025 */}
          <Card className="mb-8 overflow-hidden group hover:shadow-elegant transition-smooth">
            <div className="gradient-honey p-1">
              <div className="bg-background rounded-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge className="bg-primary text-primary-foreground flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>Prix 2025</span>
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Janvier 2025</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    🏆 Lauréat du Prix Agricole des Produits de Provence 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Nous sommes fiers d'annoncer que notre <strong>Miel de Provence IGP toutes fleurs</strong> a été 
                    récompensé par le prestigieux Prix Agricole des Produits de Provence 2025. Cette distinction 
                    reconnaît notre engagement pour la qualité et l'authenticité de nos miels provençaux.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Cette récompense distingue :</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        L'excellence gustative de notre miel toutes fleurs
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        Le respect de la tradition apicole provençale
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        Notre démarche de transhumance responsable
                      </li>
                      <li className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                        La certification Agriculture Biologique FR-BIO-16
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button className="bg-secondary hover:bg-secondary/90 text-primary hover:shadow-honey transition-smooth">
                      Découvrir notre miel primé
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Lire l'article complet
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* Secondary News */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-provence transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline" className="border-secondary text-secondary">
                    Saison
                  </Badge>
                  <span className="text-sm text-muted-foreground">Février 2025</span>
                </div>
                <CardTitle className="text-lg">Préparation de la saison apicole</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Antoine prépare ses 300 ruches pour la nouvelle saison. 
                  Découvrez les coulisses de la transhumance en Provence.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-provence transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline" className="border-accent text-accent">
                    Événement
                  </Badge>
                  <span className="text-sm text-muted-foreground">Mars 2025</span>
                </div>
                <CardTitle className="text-lg">Portes ouvertes de la miellerie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Venez découvrir notre atelier et rencontrer Antoine lors 
                  de nos prochaines portes ouvertes au printemps.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  S'inscrire
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;