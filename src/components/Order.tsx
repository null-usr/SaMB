
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

interface OrderItem {
  id: number;
  name: string;
  category: string;
  price: number;
}

const availableItems: OrderItem[] = [
  { id: 1, name: "Classic Sourdough", category: "bread", price: 7.99 },
  { id: 2, name: "Butter Croissant", category: "pastry", price: 3.49 },
  { id: 3, name: "Chocolate Chip Cookies", category: "cookie", price: 2.49 },
  { id: 4, name: "Banana Bread", category: "bread", price: 6.99 },
  { id: 5, name: "Cinnamon Roll", category: "pastry", price: 4.49 },
  { id: 6, name: "Blueberry Muffin", category: "pastry", price: 3.99 },
  { id: 7, name: "Pumpkin Spice Bread", category: "seasonal", price: 8.99 },
  { id: 8, name: "Apple Cider Donuts", category: "seasonal", price: 3.99 },
  { id: 9, name: "Cranberry Orange Scones", category: "seasonal", price: 4.49 },
];

const Order = () => {
  const { toast } = useToast();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deliveryDate: "",
    specialInstructions: "",
  });

  const handleCheckboxChange = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.deliveryDate) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (selectedItems.length === 0) {
      toast({
        title: "No items selected",
        description: "Please select at least one item to order.",
        variant: "destructive",
      });
      return;
    }
    
    // Calculate total price
    const total = selectedItems.reduce((sum, id) => {
      const item = availableItems.find((item) => item.id === id);
      return sum + (item?.price || 0);
    }, 0);
    
    // Success toast with order summary
    toast({
      title: "Order submitted successfully!",
      description: `Thank you ${formData.name}! Your order total is $${total.toFixed(2)}. We'll contact you to confirm.`,
    });
    
    // Reset form
    setSelectedItems([]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      deliveryDate: "",
      specialInstructions: "",
    });
  };

  const regularItems = availableItems.filter(item => item.category !== "seasonal");
  const seasonalItems = availableItems.filter(item => item.category === "seasonal");

  return (
    <section id="order" className="py-16 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-dancing text-bakery-900">Place Your Order</h2>
          <div className="w-24 h-1 bg-bakery-400 mx-auto mb-4"></div>
          <p className="text-bakery-700 max-w-2xl mx-auto">
            Select the items you'd like to order and provide your information.
            We'll contact you to confirm your order and arrange payment.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto bakery-shadow">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-bakery-900 mb-4">Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-7890" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deliveryDate">Desired Pickup Date *</Label>
                      <Input 
                        id="deliveryDate" 
                        name="deliveryDate"
                        type="date" 
                        value={formData.deliveryDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        required 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Regular Items */}
                <div>
                  <h3 className="text-xl font-semibold text-bakery-900 mb-4">Regular Menu Items</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {regularItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`item-${item.id}`} 
                          checked={selectedItems.includes(item.id)}
                          onCheckedChange={() => handleCheckboxChange(item.id)}
                        />
                        <Label 
                          htmlFor={`item-${item.id}`}
                          className="cursor-pointer flex-1"
                        >
                          <span className="font-medium">{item.name}</span>
                          <span className="text-bakery-600 ml-2">${item.price.toFixed(2)}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Seasonal Items */}
                <div>
                  <h3 className="text-xl font-semibold text-bakery-900 mb-4">Seasonal Specials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {seasonalItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`item-${item.id}`} 
                          checked={selectedItems.includes(item.id)}
                          onCheckedChange={() => handleCheckboxChange(item.id)}
                        />
                        <Label 
                          htmlFor={`item-${item.id}`}
                          className="cursor-pointer flex-1"
                        >
                          <span className="font-medium">{item.name}</span>
                          <span className="text-bakery-600 ml-2">${item.price.toFixed(2)}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Special Instructions */}
                <div className="space-y-2">
                  <Label htmlFor="specialInstructions">Special Instructions</Label>
                  <Textarea 
                    id="specialInstructions"
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleInputChange}
                    placeholder="Any allergies, special requests, or delivery instructions"
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-bakery-600 hover:bg-bakery-700 text-white"
                  size="lg"
                >
                  Submit Order
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Order;
