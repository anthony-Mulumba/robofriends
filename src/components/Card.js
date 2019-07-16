import React from 'react';


const Card = (props) => {

  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${props.id}?200x200`} alt="Robots" />
      <div>
        <p>{props.name}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

/*
const Card = ({name, email, id}) => {

  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="Robots" />
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
*/

export default Card;
