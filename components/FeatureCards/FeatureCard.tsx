import { FeatureCardProps } from "@/lib/types"; 

const FeatureCard = ({icon, title, description}: FeatureCardProps) => {
  return (
     <div className="glass-light shadow-md rounded-2xl p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:bg-white/80">
    <div className="w-12 h-12 mx-auto mb-5 bg-[#4ECDC4]/10 rounded-xl flex items-center justify-center">
      <span className="text-2xl text-[#4ECDC4]">{icon}</span>
    </div>
    <h3 className="text-base font-semibold text-[#1A252F] mb-3 text-center">
      {title}
    </h3>
    <p className="text-sm text-[#64748B] leading-relaxed text-center">
      {description}
    </p>
  </div>
  )
}

export default FeatureCard