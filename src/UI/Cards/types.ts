export interface ClientCardProps {
   card: {
      src: string;
      alt: string;
      link: string;
   };
}

export interface TeamCardProps {
   video: string;
   image: string;
   instrument: string;
   name: string;
   orientation: string;
   animate: boolean;
   bluer: string;
}

export interface CollabCardProps extends React.HTMLAttributes<HTMLDivElement> {
   src: string;
   alt: string;
   firstName: string;
   lastName: string;
}

export interface TeacherCardProps {
   img: string;
   name: string;
   expertise: string;
   instagram: string;
   description: string;
}

export interface FeedbackCardProps {
   img: string;
   name: string;
   word: string;
}

export interface CardProps {
   img: string;
   header: string;
   location: string;
   month: string;
}
[];
