"use client"

import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { waitListSchema } from "@/lib/schema" 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from 'sonner'
import addToAirtable from '@/utils/AddToAirtable'
import sendWelcomeEmail from '@/utils/SendWelcomeEmail'
import sendToSlack from '@/utils/SendToSlack'

const WaitListForm = () => {
  // const [successMessage, setSuccessMessage] = useState(false)
  const [Loading, setLoading] = useState(false)
  // const [showPayment, setShowPayment] = useState(false)

  const form = useForm<z.infer<typeof waitListSchema>>({
    resolver: zodResolver(waitListSchema),
    defaultValues: {
      email: "",
    },
  })


 const onSubmit = async (values: z.infer<typeof waitListSchema>) => {
    setLoading(true);
    try {
      const response = await fetch("/api/joinwaitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 201) {
        toast.success("Thanks! You're on the list. We'll be in touch soon.");
        setLoading(false);
        // setSuccessMessage(true);
        await sendWelcomeEmail(values.email);
        await sendToSlack(values.email);
        await addToAirtable(values);

        
        form.reset();
      } else {
        console.log("Error adding to waitlist", await response.text());
      }
    } catch (error) {
      console.error("An unexpected error happened:", error);
    }
  };




  return (
    <>
    <div className="glass rounded-3xl p-8 md:p-12 shadow-xl mb-10 max-w-2xl mx-auto">
    

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input 
                    placeholder="Enter your email" 
                    {...field} 
                    className="w-full px-6  text-base  rounded-2xl bg-white/90 transition-all duration-300 ease-out cursor-pointer"
                    disabled={Loading}
                   
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm mt-2 text-left" />
              </FormItem>
            )}
          />
          <Button 
            type="submit"
            disabled={Loading}
            className="px-10 py-6 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-[#4ECDC4] to-[#44B8B0] shadow-lg shadow-[#4ECDC4]/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#4ECDC4]/40 hover:from-[#5DD7CF] hover:to-[#4ECDC4] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
           
          >
            {Loading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </Form>

      <div className="text-sm text-[#94A3B8] mt-6">
        Be among the first to experience networking, refined. Get early access.
      </div>
    </div>
      {/* {successMessage && (
        <div className="animate-slide-in bg-[#52C41A]/10 border border-[#52C41A]/30 rounded-xl p-5 mb-6 text-[#389e0d]">
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">✓</span>
            <span className="font-medium">
              Thanks! You&apos;re on the list. We&apos;ll be in touch soon.
            </span>
          </div>
        </div>
      )} */}
      </>
  )
}

export default WaitListForm