import * as React from "react";
import { Questioner, Answerer } from "./types";

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
        <button onClick={() => poke(user)}>Poke {user.name}</button>
      </div>
    );
  }
}

export class QuestionerPokeBar extends PokeBar<Questioner> {}
export class AnswererPokeBar extends PokeBar<Answerer> {}
