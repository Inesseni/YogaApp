import React from "react";
import { MyColors } from "../styles/MyColors";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: MyColors.lightGrey,
  };

  //console.log({completed})

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    // if completed is 100 %, transition is 'undefined', else its 1
    transition: completed < 5 ? undefined : "width 1s linear",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        {/*<span style={labelStyles}>{`${completed}%`}</span>*/}
      </div>
    </div>
  );
};

export default ProgressBar;
