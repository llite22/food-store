import React from "react";
import imageOne from "../../assets/img/cart-img/1.png";

type TProps = {
  imageUrl:string;
  description: string;
  price: string;
}




const Card: React.FC<TProps> = ({imageUrl, description, price}) => {
  return (
    
      <div className="card__block">
        <img
          className="card__img"
          width={260}
          height={290}
          src={imageUrl}
          alt="img"
        />
        <p>{description}</p>
        <div className="price__cart">
          <b>{price}</b>
          <button className="btn__cart">Add to Cart</button>
        </div>
      </div>
  );
};

export default Card;
