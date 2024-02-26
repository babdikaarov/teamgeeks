declare namespace Card {
   interface OurStudentsCardProps {
      url: string;
      addToID: number;
      allIDS: (string | null)[];
   }
   interface CoursesCard {
      src: string;
      title: string;
   }
   interface ClientCardProps {
      card: {
         src: string;
         alt: string;
         link: string;
      };
   }

   interface TeamCardProps {
      video: string;
      image: string;
      instrument: string;
      name: string;
      orientation: string;
      animate: boolean;
      bluer: string;
   }

   interface TeacherCardProps {
      img: string;
      name: string;
      expertise: string;
      instagram: string;
      description: string;
      bluer: string;
   }

   interface FeedbackCardProps {
      img: string;
      name: string;
      word: string;
      bluer: string;
   }

   interface ConcertCardProps extends Slice.IGetStudioAlbum {}
}
