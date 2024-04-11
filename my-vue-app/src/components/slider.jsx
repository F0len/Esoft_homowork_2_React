import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "./card";
export function SliderCards({ cards }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="slider-container">
    <Slider {...settings}>
    {cards.map((card) => (
        <Card title={card}/>
      ))}
    </Slider>
    </div>
  );
}