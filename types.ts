export interface Answerer {
  name?: string;
  type: "Answerer";
}

export interface Questioner {
  id: number;
  name?: string;
  type: "Questioner";
}

export interface Self {
  name?: string;
  type: "Questioner" | "Answerer";
  id: number;
  answererSessions: number[];
  questionerSessions: number[];
}

export interface Question {
  id: number;
  votes: number[];
  text: string;
  answered: boolean;
}

export interface Session {
  id: number;
  name: string;
  locked: string;
  me?: Self;
  answerer?: Answerer;
  loading: boolean;
  questioners: Questioner[];
  questions: Question[];
}

export interface DashboardSession {
  session: Session;
  answerer: Answerer;
  totals: {
    answeredQuestions: number;
    questions: number;
    questioners: number;
  };
}
