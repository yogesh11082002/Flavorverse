
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import React, { useEffect, useState } from "react";
import { Upload, Loader2, DollarSign, Percent } from "lucide-react";
import { useFirestore, useUser } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton";

const DishSchema = z.object({
  name: z.string().min(3, { message: "Dish name must be at least 3 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  image: z.any(), // Allow any file type
  category: z.enum(["Trending", "Latest", "Popular"]),
  price: z.coerce.number().min(0, { message: "Price must be a positive number." }),
  discount: z.coerce.number().min(0).max(100).optional(),
});

export default function UploadPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const [fileName, setFileName] = useState<string | null>(null);

  const form = useForm<z.infer<typeof DishSchema>>({
    resolver: zodResolver(DishSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "Latest",
      price: 0,
      discount: 0,
    },
  });

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      form.setValue("image", file);
    } else {
      setFileName(null);
      form.setValue("image", null);
    }
  };

  const onSubmit = async (values: z.infer<typeof DishSchema>) => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to upload a dish.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const imagePlaceholder = PlaceHolderImages.find(img => img.id.startsWith('dish-')) || PlaceHolderImages[0];
      const authorPlaceholder = PlaceHolderImages.find(img => img.id.startsWith('author-')) || PlaceHolderImages[0];

      await addDoc(collection(firestore, 'dishes'), {
        name: values.name,
        description: values.description,
        category: values.category,
        price: values.price,
        discount: values.discount || 0,
        image: {
            imageUrl: imagePlaceholder.imageUrl,
            imageHint: imagePlaceholder.imageHint,
        },
        author: user.displayName || user.email,
        authorImage: {
            imageUrl: user.photoURL || authorPlaceholder.imageUrl,
            imageHint: 'user profile',
        },
        userId: user.uid,
        likesCount: 0,
        commentsCount: 0,
        createdAt: serverTimestamp(),
      });

      toast({
        title: "Success",
        description: "Dish uploaded successfully!",
      });
      router.push("/feed");
    } catch (error) {
      console.error("Error uploading dish: ", error);
      toast({
        title: "Error",
        description: "Failed to upload dish.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if(isUserLoading || !user) {
    return (
        <div className="container mx-auto max-w-2xl px-4 py-12">
            <Card>
                <CardHeader>
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-4 w-full mt-2" />
                </CardHeader>
                <CardContent className="space-y-6">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-48 w-full" />
                    <Skeleton className="h-10 w-full" />
                </CardContent>
            </Card>
        </div>
    )
  }

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
              onSubmit={form.handleSubmit(onSubmit)}
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
                    <FormMessage/>
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
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <FormControl>
                          <Input type="number" placeholder="0.00" className="pl-8" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="discount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discount (%)</FormLabel>
                       <div className="relative">
                        <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <FormControl>
                          <Input type="number" placeholder="0-100" className="pl-8" {...field} />
                        </FormControl>
                      </div>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
              </div>

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
                        <SelectItem value="Trending">Trending</SelectItem>
                        <SelectItem value="Latest">Latest</SelectItem>
                        <SelectItem value="Popular">Popular</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
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
                                {fileName ? (
                                    <p className="font-semibold text-primary">{fileName}</p>
                                ) : (
                                    <>
                                        <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                                    </>
                                )}
                                <p className="text-xs text-muted-foreground mt-2">(Image upload is simulated, a random image will be used)</p>
                            </div>
                            <Input 
                              id="dropzone-file" 
                              type="file" 
                              className="hidden" 
                              accept="image/*"
                              onChange={handleFileChange}
                            />
                        </label>
                      </div> 
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                      <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                      </>
                  ) : "Upload Dish"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
