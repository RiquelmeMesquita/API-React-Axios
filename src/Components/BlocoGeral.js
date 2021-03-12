import React from 'react';

const BlocoGeral = (props) => {
  return (
    <div className="list-group-item">
      <div>{props.children}</div>
    </div>
  );
};

export default BlocoGeral;
