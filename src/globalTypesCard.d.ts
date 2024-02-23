declare namespace Card {
   export interface OurStudentsCardProps {
      url: string;
      addToID: number;
      allIDS: (string | null)[];
   }
   export interface CoursesCard {
      src: string;
      title: string;
   }
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

   export interface TeacherCardProps {
      img: string;
      name: string;
      expertise: string;
      instagram: string;
      description: string;
      bluer: string;
   }

   export interface FeedbackCardProps {
      img: string;
      name: string;
      word: string;
   }

   export interface ConcertCardProps extends Slice.IGetStudioAlbum {}
}
