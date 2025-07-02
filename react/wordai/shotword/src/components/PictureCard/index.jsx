import React, { useState } from "react";
import "./style.css";

const PictureCard = () => {
  const [imgPreview, setImgPreview] = useState(
    "https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png"
  );
  const [word, setWord] = useState("");

  const updateImageData = (e) => {
    // html5 的文件上传功能
    // ? 该符号为可选链操作符
    // 其作用是在访问对象属性或者调用方法时，避免因为中间值为 null 或者 undefined 而引发错误。要是链中的某个环节不存在，表达式会直接返回 undefined，而非抛出错误。
    const file = e.target.files?.[0];
    // 等价于 e.target.file ? e.target.files[0] : undefined
    if (!file) {
      return;
    }
    console.log(file);
    // 图片预览，I/O 操作，异步
    return new Promise((resolve, reject) => {
      // html5
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        console.log(e.target.result);
        setImgPreview(e.target.result);
        resolve(e.target.result);
      };
    });
  };

  return (
    <div className="card">
      <input
        type="file"
        id="selectedImage"
        accept=".jpg,.jpeg,.png,.gif"
        onChange={updateImageData}
      />
      <label htmlFor="selectedImage" className="upload">
        <img className="imgPreview" src={imgPreview} alt="图片预览" />
      </label>
      {/* template => JSX => {数据绑定} => 响应式 => 单词业务 */}
      <div className="word">{word}</div>
    </div>
  );
};

export default PictureCard;
