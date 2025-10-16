'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự."),
  email: z.string().email("Email không hợp lệ."),
  phone: z.string().optional(),
  company: z.string().optional(),
  role: z.string().optional(),
  message: z.string().min(10, "Tin nhắn phải có ít nhất 10 ký tự."),
});

export type FormState = {
  message: string;
  success: boolean;
  errors?: {
    [key: string]: string[];
  } | null;
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      message: "Vui lòng kiểm tra lại thông tin.",
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log it to the console.
    console.log("New contact form submission:", validatedFields.data);

    return {
      message: "Cảm ơn bạn đã liên hệ! Hạnh sẽ phản hồi sớm nhất.",
      success: true,
      errors: null,
    };
  } catch (e) {
    return {
      message: "Đã có lỗi xảy ra. Vui lòng thử lại.",
      success: false,
      errors: null,
    }
  }
}
