import connectDB from "@/mongodb/connectdb/connectDb";
import WaitList from "@/mongodb/model/WaitList";
import { waitListSchema } from "@/lib/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    
    await connectDB();
    
    // Validate email with schema
    const waitList = waitListSchema.parse({ email });
    
    // Check if email already exists
    const existingEmail = await WaitList.findOne({ email: waitList.email });
    if (existingEmail) {
      return new Response(
        JSON.stringify({
          error: "This email is already on the waitlist!",
        }),
        {
          headers: { "Content-Type": "application/json" },
          status: 409, // Conflict status code
        }
      );
    }
    
    // Create new waitlist entry
    const newWaitList = new WaitList(waitList);
    const savedWaitList = await newWaitList.save();
    
    return new Response(
      JSON.stringify({
        savedWaitList,
        message: "You have been added to the waitlist!",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 201,
      }
    );
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return new Response(
      JSON.stringify({
        error: "Something went wrong. Please try again.",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}