function Links(props) {
  return (
    <div>
      <a href={props.link.github}>{props.link.github}</a>
      <a href={props.link.linkedin}>{props.link.linkedin}</a>
    </div>
  );
}

export default Links;
