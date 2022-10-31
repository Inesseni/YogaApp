import React from "react";
import { MyColors } from "../styles/MyColors";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: MyColors.lightGrey,

    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',

      transition: 'width 1s linear',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          {/*<span style={labelStyles}>{`${completed}%`}</span>*/}
        </div>
      </div>
    );
  };
  
  export default ProgressBar;