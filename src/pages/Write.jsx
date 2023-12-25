import React, { useState } from "react";
import styles from "../components/scss/main.module.scss";

const Write = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [uploadImg, setUploadImg] = useState(null);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeImg = (e) => {
    const files = e.target.files[0];

    const reader = new FileReader();
    if (files) {
      reader.readAsDataURL(files);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl) {
        setUploadImg([...previewImgUrl, uploadImg]);
      }
    };
  };

  return (
    <main className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          className="h-full px-2 py-1"
          id="title"
          value={title}
          onChange={onChangeTitle}
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div className="flex gap-2 items-center">
        <label htmlFor="date">날짜</label>
        <input
          type="date"
          className="h-full px-2 py-1"
          id="date"
          value={date}
          onChange={onChangeDate}
        />
      </div>
      <div>
        <input type="file" onChange={(e) => onChangeImg(e)} accept="image/*" />
        <div className={[styles["preview-img"], "mt-2"].join(" ")}>
          <img src={uploadImg} alt="" />
        </div>
      </div>
      <div>
        <span>위치</span>
      </div>
      <div>
        <textarea
          name=""
          id=""
          className={[styles["contents"], "h-full p-2"].join(" ")}
          cols="30"
          rows="10"
          placeholder="내용"
        ></textarea>
      </div>
      <div>
        <ul className="flex gap-2 items-center">
          <li>#동남아</li>
          <li>#친구</li>
          <li>#관광</li>
        </ul>
      </div>
    </main>
  );
};

export default Write;
