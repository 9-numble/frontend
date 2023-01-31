import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Tags } from "../common";
import OnlyTextContent from "./OnlyTextContent";
import TextContent from "./TextContent";
import { useImagePath } from "../../hooks";

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0px 20px;
  height: 106px;
  border-bottom: 1px solid #f0f0f6;
  display: flex;
  justfiy-content: center;
  align-items: center;
`;
const Textside = styled.div`
  height: 74px;
`;
const Imgside = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Img = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
  margin-left: 15px;
`;

function BookmarkCard({ categoryType, boardAnimalTypes, content, imageIds }) {
  const { getImageUrl } = useImagePath();
  const [mainImage, setMainImage] = useState("");
  const getMainImage = async () => {
    const imageData = await getImageUrl(imageIds[0]);
    return imageData;
  };
  getMainImage().then((res) => {
    setMainImage(res);
  });
  if (imageIds === null && content !== null) {
    return (
      <Wrapper>
        <Textside>
          <Tags categoryTag={categoryType} animalTag={boardAnimalTypes} />
          <OnlyTextContent text={content.text} />
        </Textside>
      </Wrapper>
    );
  }
  if (imageIds !== null && content !== null) {
    return (
      <Wrapper>
        <Textside>
          <Tags categoryTag={categoryType} animalTag={boardAnimalTypes} />
          <TextContent text={content} />
        </Textside>
        <Imgside>
          <Img src={mainImage} alt="img"></Img>
        </Imgside>
      </Wrapper>
    );
  }
}

export default BookmarkCard;

BookmarkCard.propTypes = {
  categoryType: PropTypes.string,
  boardAnimalTypes: PropTypes.array,
  content: PropTypes.string,
  imageIds: PropTypes.array,
};
