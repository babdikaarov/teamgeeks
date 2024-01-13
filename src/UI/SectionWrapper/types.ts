import { ReactNode } from "react";

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
   header?: string;
   children: ReactNode;
}
