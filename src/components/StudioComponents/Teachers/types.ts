export type TeacherType = {
  id: number;
  img: string;
  name: string;
  expertise: string;
  instagram: string;
  description: string;
};

export interface ModalProps {
  teacher: TeacherType;
  closeModal: () => void;
}
