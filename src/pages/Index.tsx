import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HoneyCollection from '@/components/HoneyCollection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HoneyCollection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
