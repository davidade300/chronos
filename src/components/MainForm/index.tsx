import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { type SubmitEvent, useRef } from 'react';

export function MainForm() {
  // const [taskName, setTaskName] = useState('');
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('DEU CERTO');
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          type='text'
          id='meuInput'
          placeholder='Digite algo'
          ref={taskNameInput}
        />
      </div>

      <div className='formRow'>
        <p>O proximo intervalo é de 25 minutos</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
