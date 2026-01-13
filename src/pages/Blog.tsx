import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '@/components/SiteHeader';
import logo from '@/assets/logo-miellerie.png';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const blogPosts = [
  {
    id: 'prix-agricole-2025',
    title: "Prix Agricole 2025 : Notre Miel de Lavande Primé",
    excerpt: "Nous sommes fiers d'annoncer que notre miel de lavande a été récompensé par le Prix Agricole des Produits de Provence 2025...",
    date: "12 Janvier 2025",
    category: "Récompense",
    image: "🏆",
    content: `
      <p>C'est avec une immense fierté que nous vous annonçons que notre miel de lavande a été distingué par le prestigieux <strong>Prix Agricole des Produits de Provence 2025</strong>.</p>
      
      <h2>Une reconnaissance du terroir provençal</h2>
      <p>Cette récompense vient couronner des années de travail passionné au cœur des champs de lavande de Provence. Notre miel de lavande, récolté dans les zones d'altitude du plateau de Valensole, se distingue par ses notes florales délicates et sa texture onctueuse.</p>
      
      <h2>Un savoir-faire artisanal</h2>
      <p>Chaque pot de miel représente le fruit d'une collaboration unique entre nos abeilles et le terroir provençal. Nous pratiquons une apiculture respectueuse, sans traitement chimique, permettant à nos abeilles de s'épanouir naturellement.</p>
      
      <h2>Merci à vous</h2>
      <p>Cette distinction est aussi la vôtre. Merci à tous nos clients fidèles qui nous font confiance depuis des années. C'est grâce à votre soutien que nous pouvons continuer à produire des miels d'exception.</p>
    `
  },
  {
    id: 'preparation-saison-2025',
    title: "Préparation de la Saison Apicole 2025",
    excerpt: "Avec le retour des beaux jours, nos abeilles se préparent pour une nouvelle saison de butinage dans les champs de lavande...",
    date: "28 Décembre 2024",
    category: "Actualité",
    image: "🐝",
    content: `
      <p>L'hiver touche à sa fin et nos ruches commencent à s'animer. C'est le moment crucial de préparation pour la saison apicole 2025.</p>
      
      <h2>Le réveil des colonies</h2>
      <p>Après les mois d'hiver où nos abeilles ont vécu au ralenti, les premières journées ensoleillées de février marquent le début d'une nouvelle période d'activité. Les ouvrières commencent leurs premiers vols de nettoyage et la reine reprend sa ponte.</p>
      
      <h2>Les premiers travaux au rucher</h2>
      <p>Pour l'apiculteur, c'est le moment des premières visites de printemps. Nous vérifions l'état de chaque colonie :</p>
      <ul>
        <li>Présence et qualité de la reine</li>
        <li>Réserves de miel suffisantes</li>
        <li>État sanitaire général</li>
        <li>Force de la colonie</li>
      </ul>
      
      <h2>Perspectives pour 2025</h2>
      <p>Cette année, nous prévoyons d'installer de nouvelles ruches dans les contreforts de la Sainte-Victoire, une zone préservée offrant une flore diversifiée à nos butineuses.</p>
    `
  },
  {
    id: 'bienfaits-miel-romarin',
    title: "Les Bienfaits du Miel de Romarin",
    excerpt: "Découvrez pourquoi le miel de romarin est particulièrement recommandé pour ses vertus digestives et ses propriétés uniques...",
    date: "15 Décembre 2024",
    category: "Santé",
    image: "🌱",
    content: `
      <p>Le miel de romarin, trésor de la garrigue méditerranéenne, est reconnu depuis l'Antiquité pour ses nombreuses vertus. Découvrons ensemble ce qui rend ce miel si spécial.</p>
      
      <h2>Un miel aux propriétés digestives</h2>
      <p>Le miel de romarin est traditionnellement utilisé pour favoriser la digestion. Il stimule la production de bile et aide le foie dans ses fonctions d'élimination. Une cuillère après un repas copieux peut aider à digérer plus facilement.</p>
      
      <h2>Caractéristiques gustatives</h2>
      <p>Notre miel de romarin se distingue par :</p>
      <ul>
        <li>Une couleur claire, presque blanche une fois cristallisé</li>
        <li>Une texture fine et crémeuse</li>
        <li>Un goût délicat aux notes herbacées</li>
        <li>Une légère amertume caractéristique</li>
      </ul>
      
      <h2>Comment le déguster ?</h2>
      <p>Le miel de romarin se marie parfaitement avec les fromages de chèvre frais, les yaourts nature ou simplement sur une tartine de pain de campagne. Il est également excellent dans une tisane pour profiter de ses bienfaits.</p>
      
      <h2>Notre récolte</h2>
      <p>Nous récoltons notre miel de romarin au printemps, lorsque les garrigues provençales se parent de leurs fleurs bleues caractéristiques. Cette période de floraison courte explique la rareté de ce miel d'exception.</p>
    `
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/20 text-secondary border-none mb-4">Actualités</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Notre Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Suivez nos aventures apicoles, découvrez nos conseils 
              et restez informés de nos dernières actualités.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="group hover:shadow-elegant transition-smooth border-none bg-card overflow-hidden cursor-pointer h-full">
                  <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-7xl">{post.image}</span>
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
                    <h2 className="font-semibold text-lg text-foreground mb-2 group-hover:text-secondary transition-smooth line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="Miellerie du Montaiguet" 
                className="h-16 w-auto brightness-0 invert"
              />
              <p className="text-primary-foreground/60 text-sm">
                &copy; 2025 Miellerie du Montaiguet
              </p>
            </div>
            <Link 
              to="/" 
              className="text-primary-foreground/60 hover:text-secondary transition-smooth text-sm"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
