import type {ComponentProps} from "react";

type DefaultInputProps = {
  id: string; // forçando o input a ter um id
} & ComponentProps<"input"> // o & faz a união de tipos, requer type e o que tem na união.
// nesse caso, o type e as propriedas da tag input do html

export function DefaultInput({id, type}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input id={id} type={type}/>
    </>
  )
}
