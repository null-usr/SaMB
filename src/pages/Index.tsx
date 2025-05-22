
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Order from "@/components/Order";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Order />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
