import React, { useState } from "react";
import "../components/scss/write.scss";

const Write = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [uploadImg, setUploadImg] = useState([]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeImg = (e) => {
    const files = e.target.files;
    const fileArr = [];

    const length = files.length > 10 ? 10 : files.length;

    for (let i = 0; i < length; i++) {
      const reader = new FileReader();
      const currentFile = files[i];

      reader.readAsDataURL(currentFile);

      reader.onloadend = ((index) => () => {
        const resultImg = reader.result;
        fileArr.push(resultImg);

        if (index === length - 1) {
          setUploadImg((prev) => [...fileArr, ...prev]);
        }
      })(i);
    }
  };

  return (
    <main className="write-main">
      <div className="input-box">
        <label htmlFor="title">제목</label>
        <input
          type="text"
          className="p-sm"
          id="title"
          value={title}
          onChange={onChangeTitle}
          placeholder="제목을 입력해주세요"
        />
      </div>
      <div className="input-box">
        <label htmlFor="date">날짜</label>
        <input
          type="date"
          className="p-sm"
          id="date"
          value={date}
          onChange={onChangeDate}
        />
      </div>
      <div>
        <label htmlFor="file-upload" className="label-file-upload">
          파일 업로드
        </label>
        <input
          type="file"
          id="file-upload"
          className="input-file-upload"
          onChange={(e) => onChangeImg(e)}
          accept="image/*"
          multiple={true}
        />
        <div className="preview-img mt-2">
          {uploadImg.map((item, index) => (
            <img key={index} src={item} alt="여행지 이미지" />
          ))}
        </div>
      </div>
      <div>
        <span>위치</span>
      </div>
      <div>
        <textarea
          name=""
          id=""
          className="contents h-full p-2"
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
