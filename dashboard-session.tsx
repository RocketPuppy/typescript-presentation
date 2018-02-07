import * as React from "react";
import { DashboardSession, Session } from "./types";

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
      <span>by {answerer.name}</span>
      <p>
        {totals.questioners} Questioners, {totals.answeredQuestions}/{
          totals.questions
        }{" "}
        Questions Answered
      </p>
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
