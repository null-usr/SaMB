
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Product types
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "bread" | "pastry" | "cookie" | "cake" | "seasonal";
  isBestseller?: boolean;
  isNew?: boolean;
}

// Sample product data
const productData: Product[] = [
  {
    id: 1,
    name: "Classic Sourdough",
    description: "Our signature sourdough with a perfect crust and tender crumb.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1585478259715-4aa35fffc234?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "bread",
    isBestseller: true,
  },
  {
    id: 2,
    name: "Butter Croissant",
    description: "Flaky, buttery layers that melt in your mouth.",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "pastry",
    isBestseller: true,
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    description: "Soft and chewy with generous chocolate chunks.",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "cookie",
  },
  {
    id: 4,
    name: "Banana Bread",
    description: "Moist, sweet, and full of ripe banana flavor.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "bread",
  },
  {
    id: 5,
    name: "Cinnamon Roll",
    description: "Swirls of cinnamon sugar topped with cream cheese frosting.",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "pastry",
  },
  {
    id: 6,
    name: "Blueberry Muffin",
    description: "Bursting with fresh blueberries and topped with streusel.",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1607958996333-41320f36d304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "pastry",
  },
  // Seasonal products
  {
    id: 7,
    name: "Pumpkin Spice Bread",
    description: "A fall favorite filled with warm spices and real pumpkin.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "seasonal",
    isNew: true,
  },
  {
    id: 8,
    name: "Apple Cider Donuts",
    description: "Cake donuts infused with apple cider and coated in cinnamon sugar.",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1598167402362-7a508aeca20a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "seasonal",
  },
  {
    id: 9,
    name: "Cranberry Orange Scones",
    description: "Tart cranberries and orange zest in a buttery, flaky scone.",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "seasonal",
    isNew: true,
  },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("regular");

  const regularProducts = productData.filter(product => product.category !== "seasonal");
  const seasonalProducts = productData.filter(product => product.category === "seasonal");
  
  return (
    <section id="products" className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-dancing text-bakery-900">Our Baked Goods</h2>
          <div className="w-24 h-1 bg-bakery-400 mx-auto mb-4"></div>
          <p className="text-bakery-700 max-w-2xl mx-auto">
            All our products are freshly baked daily using premium ingredients.
            Place your orders at least 24 hours in advance.
          </p>
        </div>
        
        <Tabs defaultValue="regular" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-cream-200">
              <TabsTrigger 
                value="regular" 
                className="data-[state=active]:bg-bakery-600 data-[state=active]:text-white"
              >
                Regular Menu
              </TabsTrigger>
              <TabsTrigger 
                value="seasonal" 
                className="data-[state=active]:bg-bakery-600 data-[state=active]:text-white"
              >
                Seasonal Specials
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="regular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="seasonal" className="mt-0">
            <div className="mb-8 p-4 bg-bakery-50 border border-bakery-100 rounded-lg">
              <p className="text-center text-bakery-800">
                Our seasonal items are available for a limited time. Order now before they're gone!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seasonalProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300 bg-white bakery-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {product.isBestseller && (
            <Badge className="bg-bakery-600">Bestseller</Badge>
          )}
          {product.isNew && (
            <Badge className="bg-green-600">New</Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-bakery-900 mb-2">{product.name}</h3>
        <p className="text-bakery-700 text-sm mb-4">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <span className="text-lg font-bold text-bakery-800">
          ${product.price.toFixed(2)}
        </span>
      </CardFooter>
    </Card>
  );
};

export default Products;
