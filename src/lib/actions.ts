
"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

// This file can be used for server actions that don't directly involve Firestore writes,
// as those are now handled client-side for real-time updates.
// For example, you could have complex business logic here that is triggered by a form.
// For now, the uploadDishAction is deprecated in favor of client-side Firestore SDK usage.

const ExampleSchema = z.object({
  someField: z.string(),
});

export type FormState = {
  message: string;
  errors?: {
    someField?: string[];
  };
};

export async function exampleAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  
  const validatedFields = ExampleSchema.safeParse({
    someField: formData.get("someField"),
  });
  
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (!validatedFields.success) {
    return {
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log("Action performed:", validatedFields.data);
  
  revalidatePath("/");

  return { message: "Action completed successfully!" };
}
