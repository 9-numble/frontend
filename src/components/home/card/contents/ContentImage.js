import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useImagePath } from "../../../../hooks";
const ImageArea = styled.div`
  margin-top: 16px;
  width: 320px;
  height: 220px;
  object-fit: contain;
  overflow: hidden;
`;
const StyledSlider = styled(Slider)`
  width: 320px;
  height: 220px;
  border-radius: 4px;
  margin-bottom: 34px;
  margin-top: 20px;
  .slick-list {
    border-radius: 4px;
  }

  .slick-dots {
    display: flex;
    list-style-type: none;

    li {
      width: 6px;
      height: 6px;
    }

    button {
      display: block;
      width: 6px;
      height: 6px;
      padding: 0;

      border: none;
      border-radius: 100%;
      background-color: #e9e9ed;

      text-indent: -9999px;
    }

    li.slick-active button {
      background-color: #fa3c89;
    }
  }
`;

function ContentImage({ content_image, type }) {
  const { getImageUrl } = useImagePath();
  const [mainImage, setMainImage] = useState("");
  if (type === "full") {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <StyledSlider {...settings}>
        {content_image.map(async (image) => {
          const imageUrl = await getImageUrl(image);
          return <img key={image.id} src={imageUrl} alt="img"></img>;
        })}
      </StyledSlider>
    );
  } else {
    const getMainImage = async () => {
      const imageData = await getImageUrl(content_image[0]);
      return imageData;
    };
    getMainImage().then((res) => {
      setMainImage(res);
      console.log(mainImage);
    });
    return (
      <ImageArea>
        <img src={mainImage} alt="img"></img>
      </ImageArea>
    );
  }
}

export default ContentImage;

ContentImage.propTypes = {
  content_image: PropTypes.array,
  type: PropTypes.node,
};
