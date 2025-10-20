import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const body = await req.json();
    const { email} = body;
    const API_KEY = process.env.SLACK_WEBHOOK_URL;

    if (!API_KEY) {
      console.error('No Slack webhook URL found');
      return NextResponse.json({ message: 'No Slack webhook URL found', success: false }, { status: 500});

    }
const name = email.split('@')[0];
    const slackResponse = await fetch(API_KEY, {
      method: 'POST',
      // headers: {
      //     'Content-Type': 'application/json'
      // },
      body: JSON.stringify({
          text: `${name}, <${email}> just joined the waitlist`
      })

    });

    if (slackResponse.ok) {
      console.log('Successfully sent to Slack');
      return NextResponse.json({ message: 'Successfully sent to Slack', success: true }, { status: 200});

    } else {
      console.log('Error sending to Slack', await slackResponse.text());
      return NextResponse.json({ message: 'Error sending to Slack', success: false }, { status: 400});

    }   




}