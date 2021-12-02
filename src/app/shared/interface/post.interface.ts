export interface Post {
  id: string;
  title: string;
  category: string;
  likes: number;
  campoOpcional?: string;
  tags?: string[]
}

