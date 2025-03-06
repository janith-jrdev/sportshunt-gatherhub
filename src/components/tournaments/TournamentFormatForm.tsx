
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
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
                <FormLabel className="flex items-center gap-2">
                  Tournament Format
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Choose how your tournament will be structured</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-1 gap-4"
                  >
                    <div className="space-y-4">
                      <FormItem className="flex flex-col space-x-0 space-y-2 rounded-md border p-4 hover:bg-accent">
                        <FormControl>
                          <RadioGroupItem value="knockout" className="sr-only" />
                        </FormControl>
                        <div className="flex items-center justify-between">
                          <FormLabel className="font-normal cursor-pointer">
                            Knockout
                          </FormLabel>
                          <FormDescription className="text-xs">
                            Single elimination tournament
                          </FormDescription>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-md">
                          <div className="flex justify-center">
                            <div className="flex flex-col">
                              <div className="flex">
                                <div className="border-r-2 border-primary h-8 w-8"></div>
                                <div className="h-8 border-t-2 border-primary w-8"></div>
                              </div>
                              <div className="flex">
                                <div className="border-r-2 border-primary h-8 w-8"></div>
                                <div className="h-8 w-8"></div>
                              </div>
                              <div className="flex">
                                <div className="border-r-2 border-primary h-8 w-8"></div>
                                <div className="h-8 border-b-2 border-primary w-8"></div>
                              </div>
                            </div>
                            <div className="w-8 border-t-2 border-b-2 border-r-2 border-primary flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                          </div>
                        </div>
                      </FormItem>

                      <FormItem className="flex flex-col space-x-0 space-y-2 rounded-md border p-4 hover:bg-accent">
                        <FormControl>
                          <RadioGroupItem value="league" className="sr-only" />
                        </FormControl>
                        <div className="flex items-center justify-between">
                          <FormLabel className="font-normal cursor-pointer">
                            League / Round Robin
                          </FormLabel>
                          <FormDescription className="text-xs">
                            Everyone plays against everyone
                          </FormDescription>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-md">
                          <div className="grid grid-cols-4 gap-2 text-xs font-medium text-center">
                            <div className="p-1"></div>
                            <div className="p-1 bg-primary/10 rounded">Team A</div>
                            <div className="p-1 bg-primary/10 rounded">Team B</div>
                            <div className="p-1 bg-primary/10 rounded">Team C</div>
                            
                            <div className="p-1 bg-primary/10 rounded">Team A</div>
                            <div className="p-1 bg-muted rounded">-</div>
                            <div className="p-1 bg-green-100 rounded">2-1</div>
                            <div className="p-1 bg-red-100 rounded">0-2</div>
                            
                            <div className="p-1 bg-primary/10 rounded">Team B</div>
                            <div className="p-1 bg-red-100 rounded">1-2</div>
                            <div className="p-1 bg-muted rounded">-</div>
                            <div className="p-1 bg-green-100 rounded">2-0</div>
                            
                            <div className="p-1 bg-primary/10 rounded">Team C</div>
                            <div className="p-1 bg-green-100 rounded">2-0</div>
                            <div className="p-1 bg-red-100 rounded">0-2</div>
                            <div className="p-1 bg-muted rounded">-</div>
                          </div>
                        </div>
                      </FormItem>

                      <FormItem className="flex flex-col space-x-0 space-y-2 rounded-md border p-4 hover:bg-accent">
                        <FormControl>
                          <RadioGroupItem value="both" className="sr-only" />
                        </FormControl>
                        <div className="flex items-center justify-between">
                          <FormLabel className="font-normal cursor-pointer">
                            Mixed Format
                          </FormLabel>
                          <FormDescription className="text-xs">
                            Group stage + knockout phase
                          </FormDescription>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-md">
                          <div className="flex flex-col items-center gap-2">
                            <div className="grid grid-cols-3 gap-2 text-xs font-medium w-full">
                              <div className="p-1 bg-primary/10 rounded text-center">Group A</div>
                              <div className="p-1 bg-primary/10 rounded text-center">Group B</div>
                              <div className="border-t-2 border-primary flex-1 mt-3"></div>
                            </div>
                            <div className="w-full border-r-2 border-primary h-4"></div>
                            <div className="w-full flex justify-end">
                              <div className="w-1/2 border-t-2 border-r-2 border-primary h-4"></div>
                            </div>
                            <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </div>
                          </div>
                        </div>
                      </FormItem>
                    </div>
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
