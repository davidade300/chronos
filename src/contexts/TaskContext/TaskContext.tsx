import type { TaskStateModel } from '../../models/taskStateModel.ts';
import { createContext, type Dispatch, type SetStateAction } from 'react';
import { initialTaskState } from './initialTaskState.ts';

type TaskContextProps = {
  state: TaskStateModel;
  setState: Dispatch<SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
