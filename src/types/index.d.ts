declare interface Note {
  id: string;
  title: string;
  tags: Tag[];
  description: string;
  updatedAt: string;
  isArchived: boolean;
}

declare interface Tag {
  id: string;
  name: string;
}
