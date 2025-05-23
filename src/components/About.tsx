import { Card, CardContent } from "@/components/ui/card";
import FadeInUp from "./FadeInUp";

const About = () => {
  return (
    <section id="about" className="py-16 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-dancing text-bakery-900">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-bakery-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <FadeInUp>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556471013-0001958d2f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Baker kneading dough"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
              <Card className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 max-w-xs hidden md:block bakery-shadow">
                <CardContent className="p-4">
                  <p className="text-bakery-800 italic text-sm">
                    "Every pastry is made with care, just like my grandmother
                    taught me."
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeInUp>

          <div className="space-y-6 self-end mb-0 md:mb-32">
            <h3 className="text-2xl font-bold text-bakery-800">
              From Our Kitchen To Your Table
            </h3>
            <p className="text-bakery-700">
              Welcome to Sweet As Me Bakery! We're a family-owned bakery that
              brings the warmth and comfort of homemade baked goods to your
              doorstep.
            </p>

            <p className="text-bakery-700">
              We believe in using only the finest ingredients - locally sourced
              when possible - and baking in small batches to ensure quality and
              freshness in every bite.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-cream-50 rounded-lg">
                <p className="text-3xl font-bold text-bakery-600">100%</p>
                <p className="text-sm text-bakery-700">Natural Ingredients</p>
              </div>
              {/* <div className="text-center p-4 bg-cream-50 rounded-lg">
                <p className="text-3xl font-bold text-bakery-600">50+</p>
                <p className="text-sm text-bakery-700">Unique Recipes</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
