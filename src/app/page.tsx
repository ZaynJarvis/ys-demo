import Image from "next/image";
import demoImg from "@/app/images/demo.jpg";
import ProductsPage from "./pages/products";
import AboutPage from "./pages/about";
import ContactPage from "./pages/gallary";
import NavBar from './components/NavBar';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <div>
      <NavBar />
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
        <div className="w-full relative min-h-screen flex items-center justify-center p-8 sm:p-20 bg-black bg-opacity-60">
          <Image
            src={demoImg}
            alt="Background"
            fill
            style={{objectFit:"cover"}}
            quality={100}
            className="z-0 w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
            <div className="text-center p-5">
              <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Cube Construction</h1>
              <p className="md:text-xl text-gray-300">Innovation crafted with precision and care.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="products" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <ProductsPage />
      </section>
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-700 text-white">
        <AboutPage />
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-600 text-white">
        <ContactPage />
      </section>
      <WhatsAppButton/>
    </div>
  );
}