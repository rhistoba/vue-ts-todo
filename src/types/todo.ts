export type Todo = {
  id: number;
  title: string;
  deadline: Date | null;
  status: "todo" | "done";
};

export type TodoParams = {
  title: string;
  deadline: Date | null;
  status: "todo" | "done";
};
