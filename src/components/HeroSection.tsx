import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, MapPin, Star } from 'lucide-react';
import heroImage from '@/assets/hero-antoine-apiculteur.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Antoine Riondet, apiculteur de la Miellerie du Montaiguet dans ses ruchers provençaux"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Badge Nouveau */}
          <div className="flex items-center space-x-2 mb-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 flex items-center space-x-1">
              <Award className="h-4 w-4" />
              <span>Nouveau</span>
            </Badge>
            <p className="text-sm text-muted-foreground">
              Lauréat 2025 du Prix Agricole des Produits de Provence
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Miel 100% Bio
            <span className="block font-script text-primary gradient-honey bg-clip-text text-transparent">
              de Provence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Découvrez nos miels d'exception, récoltés dans les plus beaux terroirs de Provence par Antoine Riondet, apiculteur passionné depuis 3 générations.
          </p>

          {/* Certifications */}
          <div className="flex flex-wrap items-center space-x-4 mb-8">
            <Badge variant="outline" className="border-primary text-primary">
              IGP Miels de Provence
            </Badge>
            <Badge variant="outline" className="border-accent text-accent-foreground">
              Agriculture Biologique
            </Badge>
            <Badge variant="outline" className="border-secondary text-secondary-foreground">
              FR-BIO-16
            </Badge>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 mb-8 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>3357 chemin de la plaine du Montaiguet, 13590 Meyreuil</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="gradient-honey text-primary-foreground hover:shadow-honey transition-smooth">
              Découvrir nos miels
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Notre histoire
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center space-x-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="h-4 w-4 text-primary" />
              </div>
              <span>300 ruches</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <Award className="h-4 w-4 text-secondary" />
              </div>
              <span>7 variétés de miel</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="h-4 w-4 text-accent" />
              </div>
              <span>Toute la Provence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;