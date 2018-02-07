import { contains } from "ramda";
import { Self, Session } from "./types";

export function isSignedIn(user: Self | undefined): boolean {
  return user !== undefined;
}

export function isQuestionerForSession(
  user: Self | undefined,
  session: Session
): boolean {
  return user !== undefined && contains(session.id, user.questionerSessions);
}

export function isAnswererForSession(
  user: Self | undefined,
  session: Session
): boolean {
  return user !== undefined && contains(session.id, user.answererSessions);
}
