import { useState } from "react";
import PictureCard from "./components/PictureCard";
import { generateAudio } from "./components/lib/audio";
import "./App.css";

function App() {
  const userPrompt = `分析图片内容，找出最能描述图片的一个英文单词，尽量选择更简单的A1~A2的词汇。

  返回JSON数据：
  { 
  "image_description": "图片描述", 
  "representative_word": "图片代表的英文单词", 
  "example_sentence": "结合英文单词和图片描述，给出一个简单的例句", 
  "explanation": "结合图片解释英文单词，段落以Look at...开头，将段落分句，每一句单独一行，解释的最后给一个日常生活有关的问句", 
  "explanation_replies": ["根据explanation给出的回复1", "根据explanation给出的回复2"]
  }`;

  // 上传图片的状态
  const [word, setWord] = useState("请上传图片");
  // 例句
  const [sentence, setSentence] = useState("");
  // 英文声音
  const [audio, setAudio] = useState("");
  // 解释
  const [explanation, setExplanation] = useState([]);
  const [exReply, setExpReply] = useState([]);
  // 详细内容是否展开
  const [detailExpand, setDetailExpand] = useState(false);
  // 图片预览
  const [imgPreview, setImgPreview] = useState(
    "https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png"
  );

  // 上传资源至大模型
  const uploadImg = async (imageData) => {
    setImgPreview(imageData);
    setWord("正在解析中......");
    const endpoint = "https://api.moonshot.cn/v1/chat/completions";
    const headers = {
      Authorization: `Bearer ${import.meta.env.VITE_KIMI_API_KEY}`,
      "Content-Type": "application/json",
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        model: "moonshot-v1-8k-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
                image_url: { url: imageData },
              },
              { type: "text", text: userPrompt },
            ],
          },
        ],
        stream: false,
      }),
    });
    const data = await response.json();
    const replyData = JSON.parse(data.choices[0].message.content);

    setWord(replyData.representative_word);
    setSentence(replyData.example_sentence);
    setExplanation(replyData.explanation.split("\n"));
    setExpReply(replyData.explanation_replies);

    // 声明音频对象
    // url -> audio 使得资源一直都靠大模型部署，大模型压力很大
    // base64 资源 比较小 -> atob -> unit8Array -> blob -> URL.createObjectURL -> 临时地址 -> audio展示
    const audioUrl = await generateAudio(replyData.example_sentence);
    console.log(audioUrl,'app');
    setAudio(audioUrl);
  };

  return (
    <div className="container">
      <PictureCard audio={audio} word={word} uploadImg={uploadImg} />
      <div className="output">
        <div>{sentence}</div>
        <div className="details">
          <button onClick={() => setDetailExpand(!detailExpand)}>
            Talk about it
          </button>
          {detailExpand ? (
            <div className="expand">
              <img src={imgPreview} alt="preview" />
              {explanation.map((explanation, index) => (
                <div key={index} className="explanation">
                  <div>{explanation}</div>
                </div>
              ))}
              {exReply.map((reply, index) => (
                <div key={index} className="reply">
                  <div>{reply}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="fold"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
