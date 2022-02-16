import React from "react";
import { Button } from "react-bootstrap";

export const NumberPanel = () => {
  const maxNumber = 0;
  const averageNumber = 0;

  return (
    <div style={{ textAlign: "center" }}>
      <p>{`Average Value - ${averageNumber}`}</p>
      <p>{`Maximum Number - ${maxNumber}`}</p>
      <Button>Refresh Content</Button>
    </div>
  );
};
