import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import type { HomeProps } from '../../pages/Home';

export function MainForm({ state, setState }: HomeProps) {
  function handleCLick() {
    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config, workTime: 34 },
        formattedSecondsRemaining: '23:99',
      };
    });
  }

  return (
    <form className='form' action=''>
      <div>
        <button type='button' onClick={handleCLick}>
          CLICAR
        </button>
      </div>

      <div className='formRow'>
        <DefaultInput
          labelText='task'
          type='text'
          id='meuInput'
          placeholder='Digite algo'
          defaultValue='Valor preenchido'
        />
      </div>

      <div className='formRow'>
        <p>O proximo intervalo é de {state.config.workTime} minutos</p>
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
