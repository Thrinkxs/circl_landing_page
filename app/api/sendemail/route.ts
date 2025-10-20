import { EmailTemplate } from "@/Email/EmailTemplate";
// import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";
// import { render } from "@react-email/render";
import React from "react";
import { addToBeehiiv } from "@/utils/addToBeehiiv";
import addToAirtable from "@/utils/AddToAirtable";
import connectDB from "@/mongodb/connectdb/connectDb";
import WaitList from "@/mongodb/model/WaitList";
import TeamNotificationTemplate from "@/Email/WaitlistTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {  email } = body;
console.log("Email in email is", email)


    // Connect to database
    await connectDB();

    // Get total waitlist count
    const totalWaitlistCount = await WaitList.countDocuments();
    console.log("Total waitlist count:", totalWaitlistCount);

       // Add to Airtable
    await addToAirtable({
      email,
    });


    // Add to Beehiiv email list
    await addToBeehiiv({
      email,
      tags: ["circl-waitlist", "early-access"],
      custom_fields: [
        { name: "source", value: "Circl Landing Page" },
        { name: "signup_type", value: "waitlist" },
        { name: "product", value: "circl" },
      ],
    });

    // const emailHtml = render(
    //   React.createElement(EmailTemplate, {
    //     firstName: email.split('@')[0],
    //   })
    // );


       // Send welcome email to the user
    const { data: userData, error: userError } = await resend.emails.send({
      from: "Circl <circl@themuzestudios.com>",
      to: [email],
      subject: "Welcome to Circl - You're on the waitlist! 🎉",
      react: EmailTemplate({
        firstName: email.split('@')[0],
      }) as React.ReactElement,
    });
console.log("User email data:", userData);
     console.log("User email error:", userError);
    if (userError) {
      console.error("Error sending welcome email to user:", userError);
    } else {
      console.log("Successfully sent welcome email to user");
    }

   // Send notification email to Muze Studios team
    const {  data: teamData,  error: teamError } = await resend.emails.send({
    from: "Circl Notifications <notifications@themuzestudios.com>",
      to: [
        "emmanuel@themuzestudios.com",
        "muzestudios2@gmail.com",
      ],
      subject: `🥳 New User just Joined Circl Waitlist!💃🏻💃🏻💃🏻`,
      react: TeamNotificationTemplate({
        email,
        totalWaitlistCount,
      }) as React.ReactElement,
      // html: emailHtml,
    });
    console.log("Team email data:", teamData);
    console.log("Team email error:", teamError);

      if (teamError) {
      console.error("Error sending team notification:", teamError);
    } else {
      console.log("Successfully sent team notification");
    }

    // Return success if at least one email was sent successfully
    if (userError && teamError) {
      return NextResponse.json(
        { 
          message: "Error sending emails", 
          userError, 
          teamError,
          success: false 
        },
        { status: 400 }
      );
    }
    console.log("Successfully sent email");
    return NextResponse.json(
      { message: "Successfully sent email", success: true },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error sending email", error);
    return NextResponse.json(
      { message: "Error sending email", success: false },
      { status: 400 }
    );
  }
}