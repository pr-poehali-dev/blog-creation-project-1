import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Categories from '../components/Categories';
import TagFilter from '../components/TagFilter';
import FeaturedArticles from '../components/FeaturedArticles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Categories />
        <TagFilter />
        <FeaturedArticles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;