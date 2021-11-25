import React from "react";
import { useGlobalContext } from "../stripeContext";
export default function Hero() {
  const data = useGlobalContext();
  console.log(data);
  return <div></div>;
}
