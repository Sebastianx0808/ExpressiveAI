export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfoCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
  subtitle: string;
  bgColor: string;
  iconColor: string;
}

export interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}

export interface ActionButtonProps {
  href?: string;
  to?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  [key: string]: any;
}

export interface MapProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
  showMarker?: boolean;
  markerPopup?: string;
}