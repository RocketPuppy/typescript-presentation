import * as React from "react";

interface Props {
  name?: string;
}

const NameTag = ({ name }: Props) => <div>{name || "Anonymous"}</div>;

export default NameTag;
