"use client";

import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { uploadDishAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import React, { useEffect, useRef } from "react";
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

// Custom hook for useFormStatus since it's only available in Next.js 14 canary
function useFormStatus() {
    const [pending, setPending] = React.useState(false);
    const formRef = React.useRef<HTMLFormElement>(null);

    React.useEffect(() => {
        const form = formRef.current?.closest('form');
        if (form) {
            const handleStart = (event: Event) => {
                const formData = new FormData(event.currentTarget as HTMLFormElement);
                const action = (event.currentTarget as HTMLFormElement).action;
                
                // A simple check to see if we should enter a pending state.
                // In a real app, you might want to be more specific.
                if (action) {
                    setPending(true);
                }
            };
            
            const handleFinish = () => {
                setPending(false);
            };

            form.addEventListener('submit', handleStart);

            const observer = new MutationObserver(() => {
                if (document.body.getAttribute('data-form-state') !== 'submitting') {
                    handleFinish();
                }
            });
            
            observer.observe(document.body, { attributes: true, attributeFilter: ['data-form-state'] });

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
        if (formRef.current) {
          formRef.current.reset();
        }
      }
      document.body.removeAttribute('data-form-state');
    }
  }, [state, toast, form]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    document.body.setAttribute('data-form-state', 'submitting');
    // The form action will be invoked by the browser.
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Share your Dish</CardTitle>
          <CardDescription>Fill out the form below to add a new dish to FlavorVerse.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form 
              ref={formRef} 
              action={formAction} 
              onSubmit={onFormSubmit}
              className="space-y-6"
            >
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
                render={({ field: { onChange, value, ...rest } }) => (
                  <FormItem>
                    <FormLabel>Dish Image</FormLabel>
                    <FormControl>
                      <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-accent">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                                <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                            </div>
                            <Input 
                              id="dropzone-file" 
                              type="file" 
                              className="hidden" 
                              accept="image/*"
                              {...rest}
                              onChange={(e) => onChange(e.target.files)} 
                            />
                        </label>
                      </div> 
                    </FormControl>
                    <FormMessage>{state.errors?.image as unknown as string}</FormMessage>
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
