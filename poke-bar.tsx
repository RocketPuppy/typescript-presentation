import * as React from "react";
import { Questioner, Answerer } from "./types";
import NameTag from "./name-tag";

interface Props<UserType> {
  user: UserType;
  poke: (u: UserType) => void;
}

export default class PokeBar<
  UserType extends { name?: string }
> extends React.Component<Props<UserType>> {
  render() {
    const { poke, user } = this.props;
    return (
      <div>
        <NameTag {...user} />
        <button onClick={() => poke(user)}>Poke</button>
      </div>
    );
  }
}

export class QuestionerPokeBar extends PokeBar<Questioner> {}
export class AnswererPokeBar extends PokeBar<Answerer> {}
