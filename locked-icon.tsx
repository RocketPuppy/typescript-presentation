import * as React from "react";

function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

interface Props {
  lockedStatus: string;
}

const LockedIcon = ({ lockedStatus }: Props) => {
  switch (lockedStatus) {
    case "Locked":
      return <i className="icon-padlock" />;
    case "Unlocked":
      return <i className="icon-padlock-open" />;
    case "Pending":
      return <i className="icon-spinner" />;
    default:
      return assertNever(lockedStatus);
  }
};

export default LockedIcon;
