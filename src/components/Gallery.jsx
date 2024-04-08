import React from "react";
import Slider from "react-slick";
import { systemsExpertise } from '../content/SiteData';
import styles from '../styles/Systems.module.css';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "transparent", width: "40px", height: "40px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }
  
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "transparent", width: "40px", height: "40px", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }
export default function Gallery() {
    const settings = {                
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        //variableWidth: false,
        arrows: true,
        cssEase: "linear",
        dir: "rtl",
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,                    
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                },
            },
        ],
    }

    return (
        <Slider {...settings}>
        {
            systemsExpertise.map((experty, key) => {
            return (
              <div className={styles.experty_item} key={experty.title} style={{width: 330}}>
                <img src={experty.img} className={styles.experty_item_image}/>
                <h4 className={styles.experty_item_title}>{experty.title}</h4>
              </div>
                )
            })
        }
        </Slider>
    )
}