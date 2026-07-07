import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string; // forçando o input a ter um id
  labelText: string;
} & React.ComponentProps<"input"> // o & faz a união de tipos, requer type e o que tem na união.
// nesse caso, o type e as propriedas da tag input do html

export function DefaultInput({id, type, labelText, ...rest}: DefaultInputProps) {
  return (<>
    <label htmlFor={id}>{labelText} </label>
    <input id={id} type={type} {...rest}/>
  </>)
}
