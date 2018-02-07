import * as React from "react";
import Dashboard from "./dashboard";
import {
  Self,
  DashboardSession,
  Session,
  Question,
  Questioner,
  Answerer
} from "./types";

const user: Self = {
  type: "Answerer",
  id: 1,
  name: "Deep thought",
  answererSessions: [1],
  questionerSessions: []
};

const questioner: Questioner = {
  id: 2,
  type: "Questioner"
};

const answerer: Answerer = {
  type: "Answerer",
  name: "Deep thought",
  answered_count: 4
};

const question: Question = {
  id: 1,
  votes: [],
  text: "How many roads must a man walk down?",
  answered: true
};

const answererSession: Session = {
  id: 1,
  name: "Test session",
  locked: "Unlocked",
  answerer: answerer,
  me: user,
  loading: false,
  questioners: [questioner],
  questions: [question]
};

const answererDashboardSession: DashboardSession = {
  session: answererSession,
  answerer: answerer,
  totals: {
    answeredQuestions: 0,
    questions: 1,
    questioners: 1
  }
};

const joinSession = (session: Session): Promise<Session> =>
  new Promise(() => session);

const Main = () => (
  <Dashboard
    answererSessions={[answererDashboardSession]}
    questionerSessions={[]}
    otherSessions={[]}
    loading={false}
    user={user}
    joinSession={joinSession}
  />
);

export default Main;
