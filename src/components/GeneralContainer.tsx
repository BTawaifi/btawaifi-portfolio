import React from "react";

interface Props {
  containerClass: string;
  children: React.ReactElement<any>;
}

function GeneralContainer(props: Props) {
  return (
    <div className={props.containerClass}>
      {props.children}
    </div>
  );
}

export default GeneralContainer;

