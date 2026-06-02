declare module 'lucide-react' {
  import * as React from 'react';
  
  interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  type Icon = React.FC<LucideProps>;

  export const ArrowLeft: Icon;
  export const ArrowRight: Icon;
  export const Award: Icon;
  export const BookOpen: Icon;
  export const Calendar: Icon;
  export const CheckCircle: Icon;
  export const ChevronDown: Icon;
  export const Clock: Icon;
  export const Eye: Icon;
  export const Facebook: Icon;
  export const Heart: Icon;
  export const HelpCircle: Icon;
  export const Instagram: Icon;
  export const Mail: Icon;
  export const MapPin: Icon;
  export const Menu: Icon;
  export const Monitor: Icon;
  export const Phone: Icon;
  export const Shield: Icon;
  export const Sparkles: Icon;
  export const Sun: Icon;
  export const Moon: Icon;
  export const TrendingUp: Icon;
  export const X: Icon;
}
