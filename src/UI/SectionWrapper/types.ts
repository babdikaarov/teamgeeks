export interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
   header?: string;
   children: React.ReactNode;
   forwardedRef?: React.ForwardedRef<HTMLElement>;
}
