export type TasksProps = {
  id: number;
  title: string;
  content: string;
  status: string;
  url?: string;
  fileName?: string | undefined;
  fileUrl?: string | null;
};
