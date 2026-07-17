import type { TaskModel } from './TaskModel.ts';

export type TaskStateModel = {
  tasks: TaskModel[]; // historico, mainform
  secondsRemaining: number; // CountDown, Historico, MainForm, button
  formattedSecondsRemaining: string; // Titulo, CountDown
  activeTask: TaskModel | null; // CountDown, Historico, MainForm, BUtton
  currentCycle: number; // Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
