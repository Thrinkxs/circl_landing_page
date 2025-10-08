import { features } from "@/lib/data";
import FeatureCard from "@/components/FeatureCards/FeatureCard";
import Logo from "@/components/Logo";
import WaitListForm from "@/components/Forms/WaitListForm";



export default function Home() {

  return (
    <main className="min-h-screen px-5 py-12 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Logo />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A252F] mb-6 tracking-tight leading-none">
            Circl
          </h1>

          <p className="text-xl md:text-2xl font-medium text-[#4ECDC4] mb-4 tracking-tight">
Building relationships that open doors.

          </p>

          <p className="text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed mb-12">
       Circl is the app that helps you build genuine relationships with people you meet in the real world and stay on top of your network.
          </p>

          {/* Waitlist Form */}
          <WaitListForm />
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
