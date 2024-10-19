import ProductCard from "@/app/components/ProjectCard";
import demoImg from "@/app/images/demo.jpg";

const products = [
  { id: 1, name: "Product 1", imageUrl: demoImg, date: "2022-10-01", description: "A brief description of Product1, showcasing its unique features and applications." },
  { id: 2, name: "Product 2", imageUrl: demoImg, date: "2022-09-15", description: "An innovative solution designed for efficiency and sustainability." },
  { id: 3, name: "Product 3", imageUrl: demoImg, date: "2022-08-30", description: "Advanced technology that redefines industry standards." },
  { id: 4, name: "Product 4", imageUrl: demoImg, date: "2022-07-24", description: "Cutting-edge design with exceptional performance." },
  { id: 5, name: "Product 5", imageUrl: demoImg, date: "2022-06-18", description: "Customizable features tailored to meet specific needs." },
  { id: 6, name: "Product 6", imageUrl: demoImg, date: "2022-05-05", description: "Reliable and durable, built to last under tough conditions." }];

export default function ProductsPage() {
  return (
    <div className="w-full bg-gray-900 min-h-screen flex flex-col items-center justify-center p-8 text-center text-white">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}