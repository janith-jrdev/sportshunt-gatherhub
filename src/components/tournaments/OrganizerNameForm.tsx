
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const formSchema = z.object({
  organizerName: z.string().min(3, {
    message: "Organizer name must be at least 3 characters.",
  }),
});

interface OrganizerNameFormProps {
  organizerName: string;
  updateData: (data: { organizerName: string }) => void;
  onNext: () => void;
}

export function OrganizerNameForm({ organizerName, updateData, onNext }: OrganizerNameFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizerName: organizerName || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateData({ organizerName: values.organizerName });
    onNext();
  }

  return (
    <Card className="max-w-md mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="organizerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organizer Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your organization name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Next</Button>
        </form>
      </Form>
    </Card>
  );
}
