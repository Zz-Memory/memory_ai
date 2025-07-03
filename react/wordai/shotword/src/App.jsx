import "./App.css";
import { useState } from "react";
import PictureCard from "./components/PictureCard";
// uploadImg 太长了 -> genertateAudio 模块化 -> 复用 -> lib
import {generateAudio} from './lib/audio.js'

function App() {
  // es6 字符串模板支持多行
  const picPrompt = `
  分析图片内容，找出最能描述图片的一个英文单词，尽量选择更简单的A1~A2的词汇
  返回JSON数据：
  {
    "image_description": "图片描述",
    "representative_word": "图片代表的英文单词",
    "example_sentence": "结合英文单词和图片描述，给出一个简单的例句",
    "explanation": "结合图片解释英文单词，段落以Look at ...开头，将段落分句，每一句单独一行，解释的最后，给一个日常生活有关的问句",
    "explanation_reply": ["根据explanation给出的回复1", "根据explanation给出的回复2"],
  }
  `;

  // 持有数据状态
  const [word, setWord] = useState("请上传图片");
  const [sentence, setSentence] = useState("");
  const [explanation, setExplanation] = useState("");
  const [audio, setAudio] = useState("");

  const uploadImage = async (imgData) => {
    // console.log(imgData, "来自父组件的打印");
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
        // vision 可视 图片分析
        model: "moonshot-v1-8k-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
                image_url: {
                  url: imgData,
                },
              },
              {
                type: "text",
                text: picPrompt,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    console.log("返回数据为：", data);
    const replyData = JSON.parse(data.choices[0].message.content);
    setWord(replyData.representative_word);
    setExplanation(replyData.explanation);
    setSentence(replyData.example_sentence);


    const audioUrl = await generateAudio(replyData.example_sentence);
  };


  return (
    // JSX 语法 React 优势，方便写HTML模板
    <div className="container">
      {/* 
      自定义组件，为App根组件的子组件
      组件：html、css、js的组合，将沙子一样的东西组合起来，成为一块砖
      PictureCard 图片上传功能
      模块化了，复用，页面由DOM树 => 组件树
      */}
      {/* props */}
      <PictureCard 
      uploadImage={uploadImage} 
      word={word}
      audio={audio}
      ></PictureCard>
      <div className="output">
        <div className="sentence">{sentence}</div>
        <div className="explanation">{explanation}</div>
      </div>
    </div>
  );
}

export default App;
