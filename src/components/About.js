import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  if (!props.bio) {
    return null;
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <p>{props.bio}</p>
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default About;
