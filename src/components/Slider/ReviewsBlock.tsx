import React from "react";

type TProps = {
  description: string;
  imageUrl:string;
  name: string;
  date: string;
}
const ReviewsBlock: React.FC<TProps> = ({description, imageUrl, name, date}) => {

  
  
  return (
    <div className="reviews__block">
      <p className="reviews__text">{description}</p>
      <div className="reviews__bottom">
        <img src={imageUrl} alt="" />
        <div className="reviews__bottom__text">
          <h1>{name}</h1>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsBlock;
