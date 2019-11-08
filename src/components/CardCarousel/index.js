import React, { useState, useEffect } from "react"
import { CarouselContainer, CarouselCard, CarouselArrow } from "./styles"

const CardCarousel = props => {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const cycle = setInterval(() => handleNext(), props.imageChangeInterval)
    return function cleanup() {
      clearInterval(cycle)
    }
  })

  function handleBack() {
    const newIndex = imageIndex === props.images.length - 1 ? 0 : imageIndex + 1
    setImageIndex(newIndex)
  }

  function handleNext() {
    const newIndex = imageIndex === 0 ? props.images.length - 1 : imageIndex - 1
    setImageIndex(newIndex)
  }

  return (
    <CarouselContainer height={props.height || null}>
      <CarouselArrow className="ArrowBack" onClick={() => handleBack()}>
        <div className="CarouselArrowIcon">
          <span className="chevron left"></span>
        </div>
      </CarouselArrow>
      <CarouselCard height={props.height || null}>
        {props.images.map((image, index) => (
          <div
            key={JSON.stringify(image) + index}
            className={`carousel-img ${
              index === imageIndex - 1 ||
              (index === props.images.length - 1 && imageIndex === 0)
                ? "current"
                : ""
            }`}
          >
            <img src={image} alt="client" />
          </div>
        ))}
      </CarouselCard>
      <CarouselCard height={props.height || null} className="accent">
        {props.images.map((image, index) => (
          <div
            key={JSON.stringify(image) + index}
            className={`carousel-img  ${
              index === imageIndex ? "current" : ""
            } `}
          >
            <img src={image} alt="client" />
          </div>
        ))}
      </CarouselCard>
      <CarouselCard height={props.height || null}>
        {props.images.map((image, index) => (
          <div
            key={JSON.stringify(image) + index}
            className={`carousel-img ${
              index === imageIndex + 1 ||
              (index === 0 && imageIndex === props.images.length - 1)
                ? "current "
                : ""
            }`}
          >
            <img src={image} alt="client" />
          </div>
        ))}
      </CarouselCard>

      <CarouselArrow
        className="ArrowNext"
        onClick={() => handleNext()}
        height={props.height || null}
      >
        <div className="CarouselArrowIcon">
          <span className="chevron right"></span>
        </div>
      </CarouselArrow>
    </CarouselContainer>
  )
}

CardCarousel.defaultProps = {
  imageChangeInterval: 5000,
  images: [
    "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/07/10/11/Future-London.jpg",
    "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide-xlarge.jpg",
    "https://www.tokyoweekender.com/wp-content/uploads/2019/06/Tokyo-Tower-Summer-Tokyo-Weekender.jpg",
    "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-05/9dbea438bcd305129064e4a048cc6b52.jpeg?itok=d3L2A_Rd",
  ],
}

export default CardCarousel
