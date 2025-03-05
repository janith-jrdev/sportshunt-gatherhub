
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categorySchema = z.object({
  gender: z.string().min(1, {
    message: "Please select a gender category.",
  }),
  ageGroup: z.string().min(1, {
    message: "Please enter an age group.",
  }),
  name: z.string().min(1, {
    message: "Please enter a category name.",
  }),
});

interface Category {
  id: string;
  gender: string;
  ageGroup: string;
  name: string;
}

interface TournamentCategoriesFormProps {
  categories: Category[];
  updateData: (data: { categories: Category[] }) => void;
  onNext: () => void;
  onBack: () => void;
}

export function TournamentCategoriesForm({ 
  categories, 
  updateData, 
  onNext, 
  onBack 
}: TournamentCategoriesFormProps) {
  const [currentCategories, setCurrentCategories] = useState<Category[]>(
    categories.length > 0 ? categories : [{ id: "1", gender: "", ageGroup: "", name: "" }]
  );

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      gender: "",
      ageGroup: "",
      name: "",
    },
  });

  const addCategory = () => {
    const values = form.getValues();
    const newCategory = {
      id: String(Date.now()),
      gender: values.gender,
      ageGroup: values.ageGroup,
      name: values.name,
    };
    
    setCurrentCategories([...currentCategories, newCategory]);
    form.reset();
  };

  const removeCategory = (id: string) => {
    setCurrentCategories(currentCategories.filter(category => category.id !== id));
  };

  const handleSubmit = () => {
    updateData({ categories: currentCategories });
    onNext();
  };

  return (
    <Card className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">Tournament Categories</h2>
      
      <div className="mb-6">
        <div className="bg-muted p-4 rounded-md mb-4">
          <h3 className="font-medium mb-2">Current Categories</h3>
          
          {currentCategories.length === 0 ? (
            <p className="text-muted-foreground">No categories added yet.</p>
          ) : (
            <div className="space-y-3">
              {currentCategories.map((category) => (
                <div key={category.id} className="flex items-center justify-between bg-card p-3 rounded-md border">
                  <div>
                    <strong>{category.name}</strong>
                    <div className="text-sm text-muted-foreground">
                      {category.gender} • {category.ageGroup}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => removeCategory(category.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <Form {...form}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender Category</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Men">Men</SelectItem>
                      <SelectItem value="Women">Women</SelectItem>
                      <SelectItem value="Mixed">Mixed</SelectItem>
                      <SelectItem value="Open">Open (All genders)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ageGroup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age Group</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age group" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Under 12">Under 12</SelectItem>
                      <SelectItem value="Under 16">Under 16</SelectItem>
                      <SelectItem value="Under 18">Under 18</SelectItem>
                      <SelectItem value="18-25">18-25</SelectItem>
                      <SelectItem value="26-35">26-35</SelectItem>
                      <SelectItem value="36+">36+</SelectItem>
                      <SelectItem value="Open">Open (All ages)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Name</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g. Men's Singles" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={addCategory}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Category
            </Button>
          </div>
        </Form>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button 
          type="button" 
          onClick={handleSubmit}
          disabled={currentCategories.length === 0}
        >
          Next
        </Button>
      </div>
    </Card>
  );
}
