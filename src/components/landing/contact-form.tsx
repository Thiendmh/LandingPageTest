'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, type FormState } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const contactSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự."),
  email: z.string().email("Email không hợp lệ."),
  phone: z.string().optional(),
  company: z.string().optional(),
  role: z.string().optional(),
  message: z.string().min(10, "Tin nhắn phải có ít nhất 10 ký tự."),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" id="submit_Form_5AM">
      {pending ? 'Đang gửi...' : 'Gửi thông tin'}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState<FormState, FormData>(submitContactForm, {
    message: '',
    success: false,
    errors: null,
  });

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      role: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Thành công!' : 'Lỗi!',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
    if (state.success) {
      form.reset();
    }
    if(state.errors) {
      Object.entries(state.errors).forEach(([key, value]) => {
        form.setError(key as keyof z.infer<typeof contactSchema>, { message: value?.join(', ') });
      });
    }
  }, [state, toast, form]);

  return (
    <section id="contact" className="scroll-mt-20 bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl">Đặt lịch hẹn 5:00 sáng</CardTitle>
            <CardDescription>
              Hoàn thành form dưới đây để nhận một buổi coaching 1:1 miễn phí (30-60 phút). Hạnh sẽ liên hệ lại với bạn sớm nhất.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form action={formAction} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Họ và Tên</FormLabel>
                      <FormControl>
                        <Input placeholder="Nguyễn Văn An" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                   <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Số điện thoại (Tùy chọn)</FormLabel>
                        <FormControl>
                          <Input placeholder="090..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Công ty (Tùy chọn)</FormLabel>
                        <FormControl>
                          <Input placeholder="Tên công ty" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                 </div>
                 <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chức vụ (Tùy chọn)</FormLabel>
                      <FormControl>
                        <Input placeholder="Giám đốc, Trưởng phòng..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mong muốn của bạn</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tôi muốn cải thiện kỹ năng lãnh đạo..." {...field} rows={4} />
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
    </section>
  );
}
