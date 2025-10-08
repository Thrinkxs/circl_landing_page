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

const WaitListForm = () => {
  const [successMessage, setSuccessMessage] = useState(false)
  const [Loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof waitListSchema>>({
    resolver: zodResolver(waitListSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof waitListSchema>) => {
    setLoading(true)
    console.log(values)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSuccessMessage(true)
    setLoading(false)
    
    // Reset form and hide success message after 3 seconds
    setTimeout(() => {
      form.reset()
      setSuccessMessage(false)
    }, 3000)
  }

  return (
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
                    className="w-full px-6 py-0 text-base border-2 border-[#4ECDC4]/20 rounded-2xl bg-white/90 transition-all duration-300 ease-out focus:border-[#4ECDC4] focus:shadow-lg focus:shadow-[#4ECDC4]/10 focus:bg-white focus:outline-none"
                    disabled={Loading}
                    style={{ minHeight: "50px" }}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-sm mt-2 text-left" />
              </FormItem>
            )}
          />
          <Button 
            type="submit"
            disabled={Loading}
            className="px-10 py-2 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-[#4ECDC4] to-[#44B8B0] shadow-lg shadow-[#4ECDC4]/30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#4ECDC4]/40 hover:from-[#5DD7CF] hover:to-[#4ECDC4] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            style={{ minHeight: "40px" }}
          >
            {Loading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </Form>
  {successMessage && (
        <div className="animate-slide-in bg-[#52C41A]/10 border border-[#52C41A]/30 rounded-xl p-5 mb-6 text-[#389e0d]">
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg">✓</span>
            <span className="font-medium">
              Thanks! You&apos;re on the list. We&apos;ll be in touch soon.
            </span>
          </div>
        </div>
      )}
      <p className="text-sm text-[#94A3B8] mt-6">
        Be among the first to experience networking, refined. Get early access.
      </p>
    </div>
  )
}

export default WaitListForm