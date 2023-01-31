import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authenticated } from "../store";
import axios from "axios";
import { BASE_URL } from "../constants";
import {
  FeedHeader,
  SearchBar,
  Board,
  Nav,
  WritePostBtn,
  BottomModal,
  PetRegisterModalContent,
} from "../components";
import { userSelector } from "../store";
import { useEffect, useLayoutEffect } from "react";

const StyledHeader = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

export function HomePage() {
  const setIsAuthenticated = useSetRecoilState(authenticated);
  const [user, setUser] = useRecoilState(userSelector);
  const [isOpen, setIsOpen] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [categoryParams, setCategoryParams] = useState("전체");
  const [animalParams, setAnimalParams] = useState("전체");
  const getCategory = (category) => {
    if (category === 0) {
      setCategoryParams("전체");
    } else if (category === 1) {
      setCategoryParams("자유");
    } else if (category === 2) {
      setCategoryParams("반려질문");
    } else if (category === 3) {
      setCategoryParams("반려고수");
    } else if (category === 4) {
      setCategoryParams("장소후기");
    } else if (category === 5) {
      setCategoryParams("축하해요");
    } else if (category === 6) {
      setCategoryParams("반려구조대");
    }
    console.log(categoryParams);
  };
  const getAnimal = (animal) => {
    if (animal === 0) {
      setAnimalParams("전체");
    } else if (animal === 1) {
      setAnimalParams("강아지");
    } else if (animal === 2) {
      setAnimalParams("고양이");
    } else if (animal === 3) {
      setAnimalParams("물고기");
    } else if (animal === 4) {
      setAnimalParams("햄스터");
    } else if (animal === 5) {
      setAnimalParams("파충류");
    } else if (animal === 6) {
      setAnimalParams("새");
    } else if (animal === 7) {
      setAnimalParams("토끼");
    } else if (animal === 8) {
      setAnimalParams("기타");
    }
    console.log(animalParams);
  };

  const fetchCardData = async () => {
    const town2 = "전체";
    const response = await axios.get(
      `${BASE_URL}/board/list?address=${town2}&category=${categoryParams}&animal=${animalParams}`,
      {
        headers: {
          "X-Auth-Token": localStorage.loginToken,
        },
      }
    );
    setCardData(response.data);
  };

  useEffect(() => {
    setIsOpen(user.first);
  }, [user]);

  useLayoutEffect(() => {
    if (localStorage.loginToken) {
      setIsAuthenticated(true);
      setUser({ ...user, first: false });
    }
  }, []);

  useEffect(() => {
    fetchCardData();
  }, [categoryParams, animalParams]);

  console.log(cardData);
  return (
    <>
      <StyledHeader>
        <FeedHeader />
        <SearchBar onCategory={getCategory} onAnimal={getAnimal} />
      </StyledHeader>
      <Board cardData={cardData} type="main" />
      <WritePostBtn />
      <Nav />
      <BottomModal
        content={[<PetRegisterModalContent key={1} setIsOpen={setIsOpen} />]}
        isOpen={isOpen}
        onClickDimLayer={() => setIsOpen(false)}
      />
    </>
  );
}

export default HomePage;
