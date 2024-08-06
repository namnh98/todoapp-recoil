import { TaskProps } from '@/types';
import { atom } from 'recoil';

export const initStateTaskCreate = atom<TaskProps>({
  key: 'task-create',
  default: {
    title: '',
    description: '',
    dates: '',
    priority: '',
  },
});

export const initStateListTask = atom<TaskProps[]>({
  key: 'list-task',
  default: [],
});
