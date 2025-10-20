import connectDB from "@/mongodb/connectdb/connectDb";
import WaitList from "@/mongodb/model/WaitList";
import { waitListSchema } from "@/lib/schema";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;
  
 await connectDB();
  const waitList = waitListSchema.parse({ email });
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
}
