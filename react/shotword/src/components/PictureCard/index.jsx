import { useState } from "react";
import "./style.css";

const PictureCard = (props) => {
  const { word, audio, uploadImg } = props;
  //   上传图片预览
  const [imgPreview, setImgPreview] = useState(
    "https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png"
  );

  const uploadImgData = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const data = reader.result;
        setImgPreview(data);
        uploadImg(data);
        resolve(data);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="card">
      <input
        id="selectedImage"
        type="file"
        accept=".jpg,.jpeg,.png,.gif"
        onChange={uploadImgData}
      />
      <label htmlFor="selectedImage" className="upload">
        <img src={imgPreview} alt="preview" />
      </label>
      <div className="word">
        <span>{word}</span>
      </div>
    </div>
  );
};

export default PictureCard;
