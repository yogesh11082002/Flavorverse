"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

const DishSchema = z.object({
  name: z.string().min(3, { message: "Dish name must be at least 3 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    description?: string[];
  };
};

export async function uploadDishAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  
  const validatedFields = DishSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  
  // Artificial delay to simulate network latency
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Here you would typically handle file upload to a service like Cloudinary/ImageKit
  // and then save the data (including image URL) to your database via Prisma.
  console.log("New dish submitted:", validatedFields.data);
  
  // Revalidate the feed page to show the new dish
  revalidatePath("/feed");
  revalidatePath("/");

  return { message: "Dish uploaded successfully!" };
}
