import React from "react";

function Point(props) {
  // console.log(props);
  const findObj = props.pointDesc.find(
    (point) => point.pointTitle === props.point
  );
  // console.log(findObj);
  return (
    <div className="point-title">
      <div>{props.point}</div>
      <div className="point-desc">{findObj.text}</div>
    </div>
  );
}

export default Point;
