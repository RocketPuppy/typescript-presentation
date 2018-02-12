import * as React from "react";
import { LockedStatus } from "./types";

function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

interface Props {
  lockedStatus: LockedStatus;
}

const LockedIcon = ({ lockedStatus }: Props) => {
  switch (lockedStatus) {
    case "Locked":
      return <i className="icon-padlock" />;
    case "Unlocked":
      return <i className="icon-padlock-open" />;
    default:
      return assertNever(lockedStatus);
  }
};

export default LockedIcon;
