import {FC, useRef} from "react";
import ReviewsBlock from "./Slider/ReviewsBlock";
import arrowleft from "../assets/img/arrowleft.png";
import arrowright from "../assets/img/arrowright.png";

const Reviews: FC = () => {
  const carousel = useRef<HTMLDivElement>(null);

  const LeftClick = () => {
    if (carousel.current != null) {
      console.log(carousel.current.offsetWidth);
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };
  const RightClick = () => {
    if (carousel.current != null) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  }




  const arr = [
    {
      id: 0,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.",
      imageUrl: "../../reviews-img/1.png",
      name: "Kristin Watson",
      date: "Jun 27, 2020 · 6 min read",
    },
    {
      id: 1,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.",
      imageUrl: "../../reviews-img/2.png",
      name: "Kristin Watson",
      date: "Jun 27, 2020 · 6 min read",
    },
    {
      id: 2,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.",
      imageUrl: "../../reviews-img/3.png",
      name: "Kristin Watson",
      date: "Jun 27, 2020 · 6 min read",
    },
    {
      id: 3,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.",
      imageUrl: "../../reviews-img/2.png",
      name: "Kristin Watson",
      date: "Jun 27, 2020 · 6 min read",
    },
    {
      id: 4,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.",
      imageUrl: "../../reviews-img/1.png",
      name: "Kristin Watson",
      date: "Jun 27, 2020 · 6 min read",
    },
    {
      id: 5,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.",
      imageUrl: "../../reviews-img/3.png",
      name: "Kristin Watson",
      date: "Jun 27, 2020 · 6 min read",
    },
    {
      id: 6,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.",
      imageUrl: "../../reviews-img/1.png",
      name: "Kristin Watson",
      date: "Jun 27, 2020 · 6 min read",
    },
    {
      id: 7,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.",
      imageUrl: "../../reviews-img/2.png",
      name: "Kristin Watson",
      date: "Jun 27, 2020 · 6 min read",
    },
    {
      id: 8,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.",
      imageUrl: "../../reviews-img/3.png",
      name: "Kristin Watson",
      date: "Jun 27, 2020 · 6 min read",
    },
  ];

  return (
    <section className="reviews">
      <div className="rewiews__inner">
        <div className="title__arrow">
          <div className="reviews__title">
            <h1>What our customers are saying</h1>
          </div>
          <div className="arrow">
            <div className="arrow__left" onClick={LeftClick}>
              <img width={24} height={24} src={arrowleft} alt="arrow" />
            </div>
            <div className="arrow__right" onClick={RightClick}>
              <img width={24} height={24} src={arrowright} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="reviews__bloks" ref={carousel}>
        {arr.map((obj) => (
          <ReviewsBlock
            key={obj.id}
            description={obj.description}
            imageUrl={obj.imageUrl}
            name={obj.name}
            date={obj.date}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
