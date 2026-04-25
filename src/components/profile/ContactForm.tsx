import { useState } from "react";
import { useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
import Turnstile from "@/components/contact/Turnstile";
import { isTurnstileConfigured } from "@/config/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  turnstileToken: z.string().min(1, "Please complete verification"),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void | Promise<void>;
  isLoading: boolean;
}

const ContactForm = ({ onSubmit, isLoading }: ContactFormProps) => {
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      turnstileToken: "",
      honeypot: "",
    },
  });

  const resetTurnstile = () => {
    form.setValue("turnstileToken", "", { shouldValidate: false });
    setTurnstileResetKey((currentKey) => currentKey + 1);
  };

  const handleValidSubmit = async (data: ContactFormData) => {
    try {
      await onSubmit(data);
    } finally {
      resetTurnstile();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleValidSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-200 font-medium">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="liquid-glass-field border-white/15 bg-white/10 text-white placeholder:text-white/45 focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-200 font-medium">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="your@email.com"
                  type="email"
                  className="liquid-glass-field border-white/15 bg-white/10 text-white placeholder:text-white/45 focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-200 font-medium">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What would you like to discuss?"
                  className="liquid-glass-field min-h-[100px] border-white/15 bg-white/10 text-white placeholder:text-white/45 focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="honeypot"
          render={({ field }) => (
            <input
              aria-hidden="true"
              autoComplete="off"
              className="hidden"
              tabIndex={-1}
              type="text"
              {...field}
            />
          )}
        />
        <FormField
          control={form.control}
          name="turnstileToken"
          render={() => (
            <FormItem>
              {isTurnstileConfigured ? (
                <Turnstile
                  className="flex justify-center"
                  resetKey={turnstileResetKey}
                  onVerify={(token) => {
                    form.clearErrors("turnstileToken");
                    form.setValue("turnstileToken", token, {
                      shouldValidate: true,
                    });
                  }}
                  onExpire={() => {
                    form.setValue("turnstileToken", "", {
                      shouldValidate: true,
                    });
                  }}
                  onError={() => {
                    form.setValue("turnstileToken", "", {
                      shouldValidate: true,
                    });
                    form.setError("turnstileToken", {
                      type: "manual",
                      message: "Verification failed. Please try again.",
                    });
                  }}
                />
              ) : (
                <p className="text-sm text-red-400">
                  Contact verification is unavailable.
                </p>
              )}
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full rounded-full bg-primary py-2.5 font-medium text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isLoading || !isTurnstileConfigured}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
