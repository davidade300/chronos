import { Container } from '../../components/Container';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';
import type { TaskStateModel } from '../../models/taskStateModel.ts';
import * as React from 'react';
import { CountDown } from '../../components/CountDown';

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  return (
    <MainTemplate>
      <Container>
        <CountDown {...props} />
      </Container>

      <Container>
        <MainForm {...props} />
      </Container>
    </MainTemplate>
  );
}
