import { useState, useEffect, useRef } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { postTextAtom, postTagsAtom } from "../store";
import { callRegisterPostApi } from "../api";
import { postImageFilesAtom } from "../store";
import { callRegisterImageApi } from "../api/writePost";
import { useNavigate } from "react-router-dom";
import { user } from "../store";

const useWritePost = () => {
  const navigate = useNavigate();
  const [canSubmitPost, setCanSubmitPost] = useState(false);
  const postTags = useRecoilValue(postTagsAtom);
  const postText = useRecoilValue(postTextAtom);
  const imageFiles = useRecoilValue(postImageFilesAtom);
  const { address } = useRecoilValue(user);
  const snackbarMessage = useRef("");

  const resetPostTags = useResetRecoilState(postTagsAtom);
  const resetPostText = useResetRecoilState(postTextAtom);

  useEffect(() => {
    return () => {
      resetPostTags();
      resetPostText();
    };
  }, []);

  useEffect(() => {
    confirmPost();
  }, [postTags, postText]);

  const hasTopicTag = postTags.topic !== "";

  const hasPetTag = postTags.pet.length !== 0;

  const hasText = postText !== "";

  const setSnackbarMessage = () => {
    if (!hasTopicTag) return "주제를 입력해주세요!";
    if (!hasPetTag) return "반려동물을 입력해주세요!";
    if (!hasText) return "내용을 입력해주세요!";
  };

  const confirmPost = () => {
    if (hasTopicTag && hasPetTag && hasText) {
      setCanSubmitPost(true);
    } else {
      setCanSubmitPost(false);
    }

    snackbarMessage.current = setSnackbarMessage();
  };

  const onClickPost = async () => {
    const imgFormData = new FormData();
    async function makeFormData() {
      imageFiles.forEach((image) => {
        imgFormData.append("images", image.file);
      });
    }

    makeFormData()
      .then(async () => {
        const registerImages = await callRegisterImageApi(imgFormData);
        return registerImages;
      })
      .then(async (req) => {
        const imageIds = req;
        const town = address.regionDepth2;
        const postData = {
          content: postText,
          imageIds: imageIds,
          categoryType: postTags.topic,
          boardAddress: town,
          boardAnimalTypes: postTags.pet,
        };

        const registerPost = await callRegisterPostApi(postData);
        return registerPost;
      })
      .then(() => {
        navigate("/");
      });
    return;
  };

  return {
    canSubmitPost,
    snackbarMessage: snackbarMessage.current,
    onClickPost,
  };
};

export default useWritePost;
