export interface Lecture {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  materials: Material[];
}

export interface Material {
  id: string;
  title: string;
  type: 'pdf' | 'ppt' | 'pptx';
  url: string;
}