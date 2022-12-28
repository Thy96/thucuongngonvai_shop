import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from "../../../images";
import { useTranslation } from 'react-i18next';
export default function SliderBar() {
  const { t } = useTranslation()
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="homeSilder">
      <div className="slide item">
        <div className="carousel-bg clearfix"></div>
        <img src={images.banner1} className="d-block w-100" alt="..." />
        <div className="carousel-content">
          <a href="#A" className="order-now">
            {t('homepage.orderNow')}
          </a>
          <div className="scroll-icon"></div>
          <div className="btn-scroll">{t('homepage.scrollDown')}</div>
        </div>
      </div>
      <div className="slide item">
        <div className="carousel-bg clearfix"></div>
        <img src={images.banner2} className="d-block w-100" alt="..." />
        <div className="carousel-content">
          <a href="#A" className="order-now">
            {t('homepage.orderNow')}
          </a>
          <div className="scroll-icon"></div>
          <div className="btn-scroll">{t('homepage.scrollDown')}</div>
        </div>
      </div>
      <div className="slide item">
        <div className="carousel-bg clearfix"></div>
        <img src={images.banner3} className="d-block w-100" alt="..." />
        <div className="carousel-content">
          <a href="#A" className="order-now">
            {t('homepage.orderNow')}
          </a>
          <div className="scroll-icon"></div>
          <div className="btn-scroll">{t('homepage.scrollDown')}</div>
        </div>
      </div>
    </Slider>
  );
}
