import React, { useState, useRef } from "react";
import {
  PageHeader,
  RegisterPostButton,
  ImageUploader,
  PostTextarea,
  TagSelectors,
  ImageFilePreview,
  Snackbar,
} from "../components";
import { useWritePost } from "../hooks";
import { PageWrapper } from "../styled";

function WritePostPage() {
  const { canSubmitPost, snackbarMessage, onClickPost } = useWritePost();
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);
  const inputFile = useRef(null);

  const registerPostButton = (
    <RegisterPostButton
      isDisabled={!canSubmitPost}
      onClickWhenAble={() => onClickPost()}
      onClickWhenDisable={() => setIsOpenSnackbar(true)}
    />
  );

  return (
    <form method="POST" encType="multipart/form-data">
      <PageWrapper>
        <PageHeader
          leftButtonType="exit"
          pageTitle="게시글"
          rightButton={registerPostButton}
        />
      </PageWrapper>
      <TagSelectors />
      <PostTextarea />
      <ImageFilePreview inputRef={inputFile} />
      <ImageUploader inputRef={inputFile} />
      <Snackbar
        open={isOpenSnackbar}
        setOpen={setIsOpenSnackbar}
        snackbarMessage={snackbarMessage}
      />
    </form>
  );
}

export default WritePostPage;
