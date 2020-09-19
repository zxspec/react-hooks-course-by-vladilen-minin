import React from "react";
import { useAlert } from "./AlertContext";

export default function Alert() {
  const { visible } = useAlert();

  if (!visible) return null;

  return <div className="alert alert-danger">Extremely imortant message</div>;
}
