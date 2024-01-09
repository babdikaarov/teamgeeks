import { ReactNode } from "react";

export interface ContactUsTemplateProps {
  heading: string;
  secondHeading?: string;
  paragraph: string[];
  button: ReactNode;
}
