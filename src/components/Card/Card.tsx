import {FC} from "react";


interface Ifood {
  imageUrl:string;
  description: string;
  price: string;
}




const Card: FC<Ifood> = ({imageUrl, description, price}) => {
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
