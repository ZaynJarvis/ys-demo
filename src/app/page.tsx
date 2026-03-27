import ProductsPage from "./pages/products";
import AboutPage from "./pages/about";
import ContactPage from "./pages/gallary";
import NavBar from './components/NavBar';
import WhatsAppButton from './components/WhatsAppButton';
import HeroSection from './components/HeroSection';
import ActionButtons from './components/ActionButtons';

export const metadata = {
  title: "Cube Construction | F&B Interior Design & Renovation Singapore",
  description: "Cube Construction specializes in F&B commercial interior design and renovation in Singapore. View our restaurant, cafe, and bar projects."
};

export default function Home() {
  return (
    <div className="bg-slate-900">
      <NavBar />
      <HeroSection />
      <ActionButtons />
      <section id="projects" className="bg-slate-800 py-16">
        <ProductsPage />
      </section>
      <section id="about" className="bg-slate-900 py-16">
        <AboutPage />
      </section>
      <section id="contact" className="bg-slate-800 py-16">
        <ContactPage />
      </section>
      <WhatsAppButton/>
    </div>
  );
}