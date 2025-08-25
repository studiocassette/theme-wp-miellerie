import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import beeLogo from '@/assets/bee-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={beeLogo} 
                alt="Miellerie du Montaiguet" 
                className="h-10 w-10 brightness-0 invert"
              />
              <div>
                <h3 className="font-script text-2xl font-bold text-primary">
                  Miellerie du Montaiguet
                </h3>
                <p className="text-sm text-background/70">
                  Antoine Riondet - Apiculteur
                </p>
              </div>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Depuis trois générations, nous produisons des miels d'exception 
              dans le respect des traditions apicoles provençales et de l'environnement.
            </p>
            <div className="flex space-x-4">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                AB
              </div>
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                IGP
              </div>
              <div className="text-xs text-background/60 flex items-center">
                FR-BIO-16
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-background">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-background/80">3357 chemin de la plaine</p>
                  <p className="text-background/80">du Montaiguet</p>
                  <p className="text-background/80">13590 Meyreuil</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">04 42 58 XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80">contact@miellerie-montaiguet.fr</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-background">Vente directe</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-background/80">Sur rendez-vous</p>
                  <p className="text-background/60 text-xs">Appelez-nous pour visiter</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-primary text-primary bg-transparent hover:bg-primary hover:text-background mt-4"
              >
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              <p>&copy; 2025 Miellerie du Montaiguet. Tous droits réservés.</p>
              <p>Récolté et mis en pot par l'apiculteur • Agriculture Biologique FR-BIO-16</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-smooth">
                Mentions légales
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-smooth">
                CGV
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-smooth">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;