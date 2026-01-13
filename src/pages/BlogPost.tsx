import { useParams, Link, Navigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import { blogPosts } from './Blog';
import logo from '@/assets/logo-miellerie.png';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const currentIndex = blogPosts.findIndex(post => post.id === slug);
  const post = blogPosts[currentIndex];
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-smooth mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>

            {/* Article header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-secondary/20 text-secondary border-none">
                  {post.category}
                </Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
            </div>

            {/* Featured image */}
            <div className="h-64 md:h-80 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-10">
              <span className="text-9xl">{post.image}</span>
            </div>

            {/* Article content */}
            <article 
              className="prose prose-lg max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-strong:text-foreground
                prose-ul:text-muted-foreground
                prose-li:marker:text-secondary
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Navigation between articles */}
            <div className="border-t border-border mt-16 pt-8">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                {prevPost ? (
                  <Link 
                    to={`/blog/${prevPost.id}`}
                    className="group flex-1"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full h-auto py-4 px-6 flex flex-col items-start gap-1 border-muted-foreground/20 hover:border-secondary hover:bg-secondary/5"
                    >
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <ArrowLeft className="h-3 w-3" />
                        Article précédent
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-smooth line-clamp-1">
                        {prevPost.title}
                      </span>
                    </Button>
                  </Link>
                ) : <div className="flex-1" />}
                
                {nextPost ? (
                  <Link 
                    to={`/blog/${nextPost.id}`}
                    className="group flex-1"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full h-auto py-4 px-6 flex flex-col items-end gap-1 border-muted-foreground/20 hover:border-secondary hover:bg-secondary/5"
                    >
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        Article suivant
                        <ArrowRight className="h-3 w-3" />
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-smooth line-clamp-1">
                        {nextPost.title}
                      </span>
                    </Button>
                  </Link>
                ) : <div className="flex-1" />}
              </div>
            </div>
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

export default BlogPost;
