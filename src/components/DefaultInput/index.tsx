import styles from "./styles.module.css";
import type {ComponentProps} from "react";

type DefaultInputProps = {
  id: string; // forçando o input a ter um id
  labelText?: string;
} & ComponentProps<"input"> // o & faz a união de tipos, requer type e o que tem na união.
// nesse caso, o type e as propriedas da tag input do html

export function DefaultInput({id, type, labelText}: DefaultInputProps) {
  return (<>
    {labelText && <label htmlFor={id}>{labelText ? labelText : ""} </label>}
    {/*se tiver o label text, exibe o label text*/}
    <input id={id} type={type}/>
  </>)
}
