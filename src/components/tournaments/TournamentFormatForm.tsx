
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
  FormDescription,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  format: z.string().min(1, {
    message: "Please select a tournament format.",
  }),
  fixtureFormat: z.string().min(1, {
    message: "Please select a fixture format.",
  }),
  allowOfflineEntries: z.boolean(),
});

interface TournamentFormatFormProps {
  format: string;
  fixtureFormat: string;
  allowOfflineEntries: boolean;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export function TournamentFormatForm({ 
  format, 
  fixtureFormat, 
  allowOfflineEntries, 
  updateData, 
  onNext, 
  onBack 
}: TournamentFormatFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      format: format || "",
      fixtureFormat: fixtureFormat || "",
      allowOfflineEntries: allowOfflineEntries || false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateData(values);
    onNext();
  }

  return (
    <Card className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">Tournament Format</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="format"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tournament Format</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    <FormItem className="flex flex-col items-center space-x-0 space-y-2 rounded-md border p-4 hover:bg-accent">
                      <FormControl>
                        <RadioGroupItem value="knockout" className="sr-only" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Knockout
                      </FormLabel>
                      <FormDescription className="text-center text-xs">
                        Single elimination tournament
                      </FormDescription>
                    </FormItem>
                    <FormItem className="flex flex-col items-center space-x-0 space-y-2 rounded-md border p-4 hover:bg-accent">
                      <FormControl>
                        <RadioGroupItem value="league" className="sr-only" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        League / Round Robin
                      </FormLabel>
                      <FormDescription className="text-center text-xs">
                        Everyone plays against everyone
                      </FormDescription>
                    </FormItem>
                    <FormItem className="flex flex-col items-center space-x-0 space-y-2 rounded-md border p-4 hover:bg-accent">
                      <FormControl>
                        <RadioGroupItem value="both" className="sr-only" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Mixed Format
                      </FormLabel>
                      <FormDescription className="text-center text-xs">
                        Group stage + knockout phase
                      </FormDescription>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fixtureFormat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fixture Format</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fixture format" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="single">Single Match</SelectItem>
                    <SelectItem value="bestOfThree">Best of Three</SelectItem>
                    <SelectItem value="bestOfFive">Best of Five</SelectItem>
                    <SelectItem value="timed">Timed Matches</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="allowOfflineEntries"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Allow Offline Entries
                  </FormLabel>
                  <FormDescription>
                    Enable manual registration of participants not using the platform
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
