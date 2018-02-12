import * as React from "react";
import { DashboardSession, Session } from "./types";
import { QuestionerPokeBar, AnswererPokeBar } from "./poke-bar";
import NameTag from "./name-tag";

interface Props extends DashboardSession {
  showJoin?: boolean;
  joinSession: (session: Session) => Promise<Session>;
}

const DashboardSession = ({
  session,
  answerer,
  totals,
  showJoin = false,
  joinSession
}: Props) => (
  <div>
    <div>
      <span>{session.name}</span>
      {answerer.name && (
        <span>
          by <NameTag {...answerer} />
        </span>
      )}
      <p>
        {totals.questioners} Questioners, {totals.answeredQuestions}/{
          totals.questions
        }{" "}
        Questions Answered
      </p>
      <div>
        <h1>Poke Users!</h1>
        {session.answerer && (
          <AnswererPokeBar
            user={session.answerer}
            poke={u => alert("Poked answerer " + u.name)}
          />
        )}
        {session.questioners.map(q => (
          <QuestionerPokeBar
            user={q}
            poke={u => alert("Poked questioner " + u.id)}
          />
        ))}
      </div>
    </div>
    {showJoin && (
      <div>
        <button onClick={() => joinSession(session)} type="submit">
          Join
        </button>
      </div>
    )}
  </div>
);

export default DashboardSession;
