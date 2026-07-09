import {Container} from "./components/Container";
import {Logo} from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";
import {Menu} from "./components/Menu";
import {CountDown} from "./components/CountDown";
import {DefaultInput} from "./components/DefaultInput";
import {Cycles} from "./components/Cycles";
import {DefaultButton} from "./components/DefaultButton";
import {PlayCircleIcon} from "lucide-react";
import {Footer} from "./components/Footer";
import {Heading} from "./components/Heading";
import {useState} from "react";

export function App() {
  // que todos os componentes que usam a var "numero" saibam da mudança em seu valor

  // Sempre que usar useState, não usar atribuição diretamente
  const [numero, setNumero] = useState(() => {
    return 0;
  });

  function handleClick() {
    setNumero(prevState => prevState + 1);
  }

  return (<>
    <Heading>Número: <span id="numero">{numero}</span></Heading>
    <button onClick={handleClick}>Aumenta</button>

    <Container>
      <Logo/>
    </Container>
    <Container>
      <Menu/>
    </Container>

    <Container>
      <CountDown/>
    </Container>

    <Container>
      <form className="form" action="">

        <div className="formRow">
          <DefaultInput
            labelText={numero.toString()}
            type="text"
            id="meuInput"
            placeholder="Digite algo"
            defaultValue="Valor preenchido"
          />
        </div>

        <div className="formRow">
          <p>lorem ipsum dolor sit amet</p>
        </div>

        <div className="formRow">
          <Cycles/>
        </div>

        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon/>}/>
        </div>
      </form>
    </Container>

    <Container>
      <Footer/>
    </Container>

  </>);
}

