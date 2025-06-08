import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative grid grid-cols-1 content-center bg-cream-50 overflow-hidden min-h-[90vh]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>

      <div className="px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center">
          {/* Image Block */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/logo.png"
              alt="Sweet As Me Bakery Logo"
              className="w-[400px] md:w-[100%] max-w-full hover"
            />
          </div>

          {/* Text Block */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-8 lg:mt-0">
            <div className="text-center lg:text-left max-w-xl">
              <p className="text-4xl font-bold mb-6 font-dancing text-bakery-900">
                Delicious homemade baked goods made with love, quality
                ingredients, and homemade recipes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  className="bg-bakery-600 hover:bg-bakery-700 text-white font-medium px-6 py-3"
                  size="lg"
                  asChild
                >
                  <a href="#products">Browse Our Products</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-bakery-600 text-bakery-600 hover:bg-bakery-50"
                  size="lg"
                  asChild
                >
                  <a href="#order">Place an Order</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream-100 to-transparent"></div>
    </section>
  );
};

export default Hero;
