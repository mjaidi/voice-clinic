import React, { useState, useEffect } from "react"
import {
  CarouselContainer,
  CarouselImage,
  CarouselSteps,
  CarouselArrow,
} from "./styles"
import { Link } from "gatsby"
import Button from "../common/button"

const Carousel = props => {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const cycle = setInterval(() => handleNext(), props.imageChangeInterval)
    return function cleanup() {
      clearInterval(cycle)
    }
  })

  function handleNext() {
    const newIndex = imageIndex === props.images.length - 1 ? 0 : imageIndex + 1
    setImageIndex(newIndex)
  }

  function handleBack() {
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
      <CarouselImage height={props.height || null}>
        {props.images.map((image, index) => (
          <div
            key={JSON.stringify(image) + index}
            className={`CarouselImageContainer ${
              index === imageIndex ? "CarouselImageCurrent" : ""
            }`}
            style={{
              backgroundImage: `linear-gradient(165deg, rgba(0,0,0,0.3) 0%, rgba(96,96,96,0.3) 100%), url(${image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="CarouselCaptionsContainer">
              {image.headline && (
                <div className="CarouselImageLabel">
                  <h2>{image.headline}</h2>
                </div>
              )}
              {image.subline && (
                <div className="CarouselImageSubline">
                  <h4>{image.subline}</h4>
                </div>
              )}
              <Link to="/contact">
                <Button>Vous avez un projet?</Button>
              </Link>
            </div>
          </div>
        ))}
      </CarouselImage>
      <CarouselSteps height={props.height || null}>
        {props.images.map((image, index) => (
          <div
            key={JSON.stringify(image) + index}
            className={`CarouselStep${
              index === imageIndex ? " CarouselCurrentStep" : ""
            }`}
            onClick={() => setImageIndex(index)}
          >
            &#x25CF;
          </div>
        ))}
      </CarouselSteps>
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

Carousel.defaultProps = {
  imageChangeInterval: 5000,
  images: [
    {
      headline: "London",
      subline: "Soho",
      url:
        "https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/07/10/11/Future-London.jpg",
    },
    {
      headline: "Paris",
      subline: "Marais",
      url:
        "https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/paris-cityscape-overview-guide-xlarge.jpg",
    },
    {
      headline: "Tokyo",
      subline: "Chiyoda-ku",
      url:
        "https://www.tokyoweekender.com/wp-content/uploads/2019/06/Tokyo-Tower-Summer-Tokyo-Weekender.jpg",
    },
    {
      headline: "New York",
      subline: "Upper West Side",
      url:
        "https://www.visittheusa.com/sites/default/files/styles/hero_m_1300x700/public/images/hero_media_image/2017-05/9dbea438bcd305129064e4a048cc6b52.jpeg?itok=d3L2A_Rd",
    },
  ],
}

export default Carousel
