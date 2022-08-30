import React from "react";

const DocumentCard = (props) => {
  const data = props.data;
  return (
    <div className="DocumentCard">
      <img src={data.img} alt="click here" />
      <p>{data.text}</p>
    </div>
  );
};

export default DocumentCard;
