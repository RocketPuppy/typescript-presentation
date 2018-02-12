import * as React from "react";
import { DashboardSession, Self, Session } from "./types";
import SessionC from "./dashboard-session";
import Heading from "./dashboard-heading";
import { isSignedIn } from "./user-utils";
import NameTag from "./name-tag";

interface SessionProps {
  sessions: DashboardSession[];
  joinSession: (session: Session) => Promise<Session>;
  showJoin: boolean;
}

const SessionList = ({ sessions, joinSession, showJoin }: SessionProps) => (
  <ul>
    {sessions.map(session => (
      <li key={session.session.id}>
        <SessionC {...session} joinSession={joinSession} showJoin={showJoin} />
      </li>
    ))}
  </ul>
);

interface DashboardProps {
  answererSessions: DashboardSession[];
  questionerSessions: DashboardSession[];
  otherSessions: DashboardSession[];
  loading: boolean;
  user?: Self;
  joinSession: (session: Session) => Promise<Session>;
}

const Dashboard = ({
  questionerSessions,
  answererSessions,
  otherSessions,
  loading,
  user,
  joinSession
}: DashboardProps) => (
  <div>
    {user && <NameTag {...user} />}
    <Heading user={user} />
    {loading && <p>"Loading..."</p>}
    {answererSessions.length > 0 && (
      <div key="answerer">
        <h2>Answerer</h2>
        <SessionList
          sessions={answererSessions}
          joinSession={joinSession}
          showJoin={isSignedIn(user)}
        />
      </div>
    )}
    {questionerSessions.length > 0 && (
      <div key="questioner">
        <h2>Questioner</h2>
        <SessionList
          sessions={questionerSessions}
          joinSession={joinSession}
          showJoin={isSignedIn(user)}
        />
      </div>
    )}
    {otherSessions.length > 0 && (
      <div key="other">
        <h2>Unjoined</h2>
        <SessionList
          sessions={otherSessions}
          joinSession={joinSession}
          showJoin={isSignedIn(user)}
        />
      </div>
    )}
  </div>
);

export default Dashboard;
