
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Navbar } from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Trophy, Calendar, MapPin, User, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const registrationSchema = z.object({
  fullName: z.string().min(3, {
    message: "Full name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

const TournamentRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tournament = location.state?.tournament || {
    id: 1,
    title: "Summer Tournament",
    sport: "Basketball",
    date: "June 15 - June 30, 2023",
    location: "Central Park Courts",
    categories: ["Men's Open", "Women's Open", "Under 18"]
  };

  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      category: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = (values: z.infer<typeof registrationSchema>) => {
    console.log("Registration values:", values);
    
    // In a real app, we would submit this to an API
    toast.success("Successfully registered for the tournament!", {
      description: `You've registered for ${tournament.title} in the ${values.category} category.`,
    });
    
    // Redirect back to the tournaments page
    setTimeout(() => {
      navigate("/player-tournaments");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <MainLayout>
        <div className="container px-4 mx-auto pt-24 pb-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Register for Tournament</h1>
            <p className="text-muted-foreground mt-2">
              Complete your registration for {tournament.title}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Tournament Details</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Trophy className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">{tournament.title}</h3>
                      <p className="text-sm text-muted-foreground">{tournament.sport}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Date & Time</h3>
                      <p className="text-sm text-muted-foreground">{tournament.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-sm text-muted-foreground">{tournament.location}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-2 text-muted-foreground" />
                              <Input placeholder="Enter your full name" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                              <Input type="email" placeholder="your.email@example.com" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                              <Input placeholder="Enter your phone number" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {tournament.categories.map((category, index) => (
                                <SelectItem key={index} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="agreeToTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the terms and conditions
                            </FormLabel>
                            <p className="text-sm text-muted-foreground">
                              By registering, you agree to the tournament rules and regulations.
                            </p>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">
                      Complete Registration
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default TournamentRegistration;
