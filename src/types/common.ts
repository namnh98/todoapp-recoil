export type ItemOptionProps = {
  key: string;
  value: string;
};

export type TaskItemProps = { title: string; description: string; dates: string; priority: string };

export type TaskProps = TaskItemProps & {
  taskId?: string;
  isDone?: boolean;
};

export type MainRouteProps = {
  HomeScreen?: undefined;
  CreateScreen?: { task: TaskProps };
};
