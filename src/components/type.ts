export interface Itechnology {
  id: number;
  techName: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}


export type TecType = Itechnology;

export interface StackProps {
  stack: TecType[];
  onRemove: (techName: string) => void;
  onRemoveAll: () => void;
}