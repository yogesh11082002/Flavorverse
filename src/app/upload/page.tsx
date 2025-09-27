"use client";

import { useFormState, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { uploadDishAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef } from "react";
import { Upload, Loader2 } from "lucide-react";

const DishSchema = z.object({
  name: z.string().min(3, { message: "Dish name must be at least 3 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  image: z.any().refine(files => files?.length === 1, "Image is required."),
});

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full">
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                </>
            ) : "Upload Dish"}
        </Button>
    )
}

// Custom hook for useFormStatus
function useFormStatus() {
    const [pending, setPending] = React.useState(false);
    const formRef = React.useRef<HTMLFormElement>(null);

    React.useEffect(() => {
        const form = formRef.current?.closest('form');
        if (form) {
            const handleStart = () => setPending(true);
            const handleFinish = () => setPending(false);

            form.addEventListener('submit', handleStart);
            // This is a simplification; a real app might need a more robust way
            // to detect when the form submission is complete.
            const observer = new MutationObserver((mutations) => {
                // Heuristic: if form is no longer submitting, set pending to false
                if(!form.hasAttribute('data-submitting')) {
                    handleFinish();
                }
            });

            observer.observe(form, { attributes: true });


            return () => {
                form.removeEventListener('submit', handleStart);
                observer.disconnect();
            };
        }
    }, []);

    return { pending, ref: formRef };
}



export default function UploadPage() {
  const [state, formAction] = useFormState(uploadDishAction, { message: "" });
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const form = useForm<z.infer<typeof DishSchema>>({
    resolver: zodResolver(DishSchema),
    defaultValues: {
      name: "",
      description: "",
      image: undefined
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: state.message,
        });
        form.reset();
        formRef.current?.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Share your Dish</CardTitle>
          <CardDescription>Fill out the form below to add a new dish to FlavorVerse.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form ref={formRef} action={formAction} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dish Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Classic Spaghetti Bolognese" {...field} />
                    </FormControl>
                    <FormMessage>{state.errors?.name}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your dish..." className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage>{state.errors?.description}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dish Image</FormLabel>
                    <FormControl>
                      <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-accent">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <Input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={(e) => field.onChange(e.target.files)} />
                        </label>
                      </div> 
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <SubmitButton />
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
