import React from "react";
import { Button } from "antd";
const button: React.CSSProperties = {};

export default function ButtonCustom({ label }) {
  return <Button>{label}</Button>;
}
