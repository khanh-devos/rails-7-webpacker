import React from "react"
import { useSelector } from "react-redux";

export default function Greeting() {
  const message = useSelector((state) => state.greeting.message );


  return <div>
    <p>
      {`Greeting: ${message}`}
    </p>

  </div>
}