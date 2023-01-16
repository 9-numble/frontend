import React, { useState, useEffect } from "react";
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

function ContentImage({ imageIdsArray, type }) {
  const { getImageUrl } = useImagePath();
  const [imageUrlArray, setImageUrlArray] = useState([]);
  const [mainImageUrl, setMainImageUrl] = useState("");
  const getImage = async (imageId) => {
    const imageUrl = await getImageUrl(imageId);
    setImageUrlArray((currentImageUrl) => [...currentImageUrl, imageUrl]);
    return setImageUrlArray;
  };

  useEffect(() => {
    for (let i = 0; i < imageIdsArray.length; i++) {
      getImage(imageIdsArray[i]);
      return;
    }
  }, []);

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
        {imageUrlArray.map((imageUrl, index) => {
          return <img key={index} src={imageUrl} alt="img"></img>;
        })}
      </StyledSlider>
    );
  } else {
    const getMainImage = async () => {
      const imageData = await getImageUrl(imageIdsArray[0]);
      return imageData;
    };
    getMainImage().then((res) => {
      setMainImageUrl(res);
    });
    return (
      <ImageArea>
        <img src={mainImageUrl} alt="img"></img>
      </ImageArea>
    );
  }
}

export default ContentImage;

ContentImage.propTypes = {
  imageIdsArray: PropTypes.array,
  type: PropTypes.node,
};
