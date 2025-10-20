export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface BeehiivSubscriber {
  email: string;
  custom_fields?: { name: string; value: string | number | boolean }[];
  tags?: string[];
}