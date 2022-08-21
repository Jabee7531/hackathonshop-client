/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import palette from "../../lib/palette";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

type SlickCarouselType = {
  slides: EmotionJSX.Element[];
  rest_settings: object;
};

const SlickCarousel = ({ slides, rest_settings }: SlickCarouselType) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    prevArrow: <SampleNextArrow className="slick-next" />,
    nextArrow: <SamplePrevArrow className="slick-prev" />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    ...rest_settings,
  };
  return (
    <div css={SlickCarouselStyle}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div css={CarouselImg} key={index}>
            {slide}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;

const CarouselImg = css`
  position: relative;
  height: 30rem;
`;
const SlickCarouselStyle = css`
  width: 100%;

  .slick-next {
    ::before {
      font-size: 2rem;
      // content: "<";
      color: ${palette.grey["100"]};
    }
    position: absolute;
    width: 2rem;
    right: 0;
    margin-right: 1rem;
  }
  .slick-prev {
    ::before {
      font-size: 2rem;
      // content: "<";
      color: ${palette.grey["100"]};
    }
    position: absolute;
    width: 2rem;
    left: 0px;
    margin-left: 1rem;
    z-index: 1;
  }
`;
