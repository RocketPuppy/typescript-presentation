import * as React from "react";
import { Link } from "react-router-dom";
import { Self } from "./types";
import { isSignedIn } from "./user-utils";

const SignedInHeading = () => <Link to="/new-session">New Session</Link>;

export const SignedOutHeading = ({
  className = ""
}: {
  className?: string;
}) => (
  <div className={className}>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </div>
);

interface Props {
  user?: Self;
}

const Heading = ({ user }: Props) => (
  <div>
    {isSignedIn(user) ? <SignedInHeading /> : <SignedOutHeading />}
    <h1>Modernator</h1>
  </div>
);

export default Heading;
