export interface ModalProps {
  images: (
    | {
        alt: string;
        src: string;
        view: string;
      }
    | undefined
  )[];
  index: number;
  setIndexImage: React.Dispatch<React.SetStateAction<number>>;
  nextPage: () => void;
}
