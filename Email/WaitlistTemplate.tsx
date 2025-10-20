import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface TeamNotificationTemplateProps {
  email: string;
  totalWaitlistCount?: number;
  timestamp?: string;
}

export const TeamNotificationTemplate: React.FC<Readonly<TeamNotificationTemplateProps>> = ({
  email,
  totalWaitlistCount,
  timestamp = new Date().toLocaleString(),
}) => {
  const userHandle = email.split('@')[0];

  return (
    <Html>
      <Head />
      <Preview>🎉 New Circl Waitlist Signup - {email}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                'circl-teal': '#4ECDC4',
                'circl-dark': '#1A252F',
                'circl-gray': '#64748B',
                'circl-light-gray': '#94A3B8',
                'circl-success': '#52C41A',
              },
            },
          },
        }}
      >
        <Body className="bg-gray-50 text-base font-sans">
          <Container className="bg-white mx-auto p-8 max-w-2xl rounded-lg shadow-sm">
            {/* Header */}
            <Section className="text-center py-6">
              <div className="w-12 h-12 mx-auto mb-3 bg-circl-success/10 rounded-xl flex items-center justify-center">
                <span className="text-xl">🎉</span>
              </div>
              <Heading className="text-2xl font-bold text-circl-dark m-0 mb-2">
                New Waitlist Signup!
              </Heading>
              <Text className="text-circl-gray text-sm mb-0">
                {timestamp}
              </Text>
            </Section>

            <Hr className="border-gray-200 my-4" />

            {/* User Info */}
            <Section className="bg-circl-teal/5 border border-circl-teal/20 rounded-lg p-6 mb-6">
              <Heading className="text-lg font-semibold text-circl-dark m-0 mb-4">
                User Details
              </Heading>
              
              <div>
                <div className="flex items-center gap-3" style={{ marginBottom: '12px' }}>
                  <Text className="text-sm font-medium text-circl-gray m-0 w-20">Email:</Text>
                  <Text className="text-sm text-circl-dark m-0 font-mono bg-gray-100 px-2 py-1 rounded">
                    {email}
                  </Text>
                </div>
               
                <div className="flex items-center gap-3">
                  <Text className="text-sm font-medium text-circl-gray m-0 w-20">Handle:</Text>
                  <Text className="text-sm text-circl-gray m-0">
                    {userHandle}
                  </Text>
                </div>
              </div>
            </Section>

            {/* Stats */}
            {totalWaitlistCount && (
              <Section className="bg-gray-50 rounded-lg p-6 mb-6">
                <Heading className="text-lg font-semibold text-circl-dark m-0 mb-3">
                  Waitlist Stats
                </Heading>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-circl-teal">
                    {totalWaitlistCount}{" "}
                  </span>
                  <Text className="text-circl-gray m-0">
                     total users on waitlist
                  </Text>
                </div>
              </Section>
            )}

            {/* Quick Actions */}
            <Section className="bg-circl-dark/5 rounded-lg p-6 mb-6">
              <Heading className="text-lg font-semibold text-circl-dark m-0 mb-4">
                Quick Actions
              </Heading>
              
              <div>
                {/* <Text className="text-sm m-0" style={{ marginBottom: '8px' }}>
                  📊 <Link href="#" className="text-circl-teal underline">View Analytics Dashboard</Link>
                </Text>
                <Text className="text-sm m-0" style={{ marginBottom: '8px' }}>
                  📝 <Link href="#" className="text-circl-teal underline">Export Waitlist CSV</Link>
                </Text> */}
                <Text className="text-sm m-0" style={{ marginBottom: '8px' }}>
                  📧 <Link href="#" className="text-circl-teal underline">Send Follow-up Campaign</Link>
                </Text>
                <Text className="text-sm m-0">
                  🔍 <Link href={`mailto:${email}`} className="text-circl-teal underline">Contact User Directly</Link>
                </Text>
              </div>
            </Section>

            {/* Marketing Notes */}
            <Section>
              <Text className="text-sm text-circl-gray mb-2">
                💡 <strong>Marketing Note:</strong> This user signed up from your landing page. 
                Consider following up with additional onboarding content or early access perks.
              </Text>
              
              <Text className="text-sm text-circl-gray mb-0">
                🚀 Keep building momentum! Each signup brings you closer to launch.
              </Text>
            </Section>

            <Hr className="border-gray-200 my-6" />

            {/* Footer */}
            <Section className="text-center">
              <Text className="text-xs text-circl-light-gray mb-2">
                Circl Team Notification System
              </Text>
              <Text className="text-xs text-circl-light-gray">
                Sent automatically when users join your waitlist
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default TeamNotificationTemplate;
