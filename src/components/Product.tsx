import { FC, useState, useEffect } from "react";
import Card from "./Card/Card";
import axios, { AxiosResponse } from "axios";

interface Post {
  id: number;
  imageUrl: string;
  description: string;
  price: string;
}

const baseURL = "https://64098bc8d16b1f3ed6d5b94f.mockapi.io/items";

const Product: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [post, setPost] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>(baseURL).then((response: AxiosResponse<Post[]>) => {
      setPost(response.data);
    });
  }, []);

  if (!post || !post.length) return null;


  const onClickCategory = (index: number) => {
    setActiveIndex(index);
  };
  const categories = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Desert",
    "Beverage",
  ];

  return (
      <section id="product" className="product">
        <div className="product__top">
          <h1>Simple Meals for You</h1>
          <div className="search__block"></div>
          <ul>
            {categories.map((item, i) => (
                <li
                    key={i}
                    onClick={() => onClickCategory(i)}
                    className={activeIndex === i ? "active" : ""}
                >
                  {item}
                </li>
            ))}
          </ul>
        </div>
        <div className="card">
          {post.map((obj) => (
              <Card
                  key={obj.id}
                  imageUrl={obj.imageUrl}
                  description={obj.description}
                  price={obj.price}
              />
          ))}
        </div>
        <div className="product__bottom"></div>
      </section>
  );
};

export default Product;