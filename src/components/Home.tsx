
import background from "../assets/img/background.jpg";
import {FC} from "react";


const Home:FC = () => {
  return (
    <section className="home">
        <div className="background__photo">
          <h1>Tasty Meals made for You</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <a href='#product'>View Menu 🍲</a>
          <img width={1280} height={678} src={background} alt="background" />
        </div>

        <div className="info">
          <div className="info__inner">
            <div className="info__text">
              <h1>100%</h1>
              <p>User satisfaction</p>
            </div>
            <div className="info__text">
              <h1>150+</h1>
              <p>Resturants</p>
            </div>
            <div className="info__text">
              <h1>24/7</h1>
              <p>Customer support</p>
            </div>
            <div className="info__text">
              <h1>250K</h1>
              <p>Users served</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home