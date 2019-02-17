import React, { Component } from "react";
import Slider from "react-slick";
import prev from "./prev.svg";
import next from "./next.svg";

// function NextArrow(props) {
//   const { className, onClick } = props;
//   return <img src={next} className={className + " nextArrow"} onClick={onClick} />;
// }

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return <img src={prev} className={className + " prevArrow"} onClick={onClick} />;
// }

export default class PicSlider extends Component {
  render() {
    console.log(this.props.pics);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      //   nextArrow: <NextArrow />,
      //   prevArrow: <PrevArrow />,
      dotsClass: "slick-dots slide-dots"
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          {this.props.pics.map(pic => {
            return <img src={pic.pic} alt="testing" className="slider-img" />;
          })}
        </Slider>
      </div>
    );
  }
}
