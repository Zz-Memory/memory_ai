import { useState, useRef } from "react";
import "./App.css";

function App() {
  // 配置
  const { VITE_TOKEN, VITE_APP_ID, VITE_CLUSTER_ID } = import.meta.env;
  // console.log(VITE_TOKEN, VITE_APP_ID, VITE_CLUSTER_ID,'----------------------------------');

  const [prompt, setPrompt] = useState("大家好，我是Tom");
  // 状态 ready，loading，done 界面由数据状态驱动
  const [status, setStatus] = useState("ready");
  // DOM 对象绑定 use开头的都叫hooks函数
  const audioRef = useRef(null);

  // base64 格式
  // 生成一个blob对象，blob对象是一个二进制对象，用于存储二进制数据
  function createBlobURL(base64AudioData) {
    var byteArrays = [];
    var byteCharacters = atob(base64AudioData);
    for (var offset = 0; offset < byteCharacters.length; offset++) {
      var byteArray = byteCharacters.charCodeAt(offset);
      byteArrays.push(byteArray);
    }
    var blob = new Blob([new Uint8Array(byteArrays)], { type: "audio/mp3" });
    return URL.createObjectURL(blob);
  }

  // 去调用火山接口，返回语音
  const generateAudio = () => {
    // 角色
    const voiceName = "zh_male_sunwukong_mars_bigtts";
    // api 地址
    const endpoint = "tts/api/v1/tts";

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer;${VITE_TOKEN}`,
    };

    // Post 请求体
    const payload = {
      app: {
        appid: VITE_APP_ID,
        token: VITE_TOKEN,
        cluster: VITE_CLUSTER_ID,
      },
      user: {
        uid: "bearbobo",
      },
      audio: {
        voice_type: voiceName,
        encoding: "ogg_opus", // 编码
        compression_rate: 1, // 压缩的比例
        rate: 24000,
        speed_ratio: 1.0,
        volume_ratio: 1.0,
        pitch_ratio: 1.0,
        emotion: "happy", // 情绪
      },
      request: {
        // 唯一ID
        reqid: "Math.random().toString(36).substring(7)",
        text: prompt,
        text_type: "plain",
        operation: "query",
        silence_duration: "125",
        with_frontend: "1",
        frontend_type: "unitTson",
        pure_english_opt: "1",
      },
    };

    setStatus("loading");

    // 发送请求
    fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data,'--------------------------------')
        // 黑盒子 base64 字符串编码的格式表达图片，声音，视频
        // 编解码的问题
        const audioUrl = createBlobURL(data.data); // 返回一个可以播放的音频地址
        audioRef.current.src = audioUrl;
        audioRef.current.play();
        setStatus("done");
      });
  };
  return (
    <div className="container">
      <div>
        <label>Prompt</label>
        <button onClick={generateAudio}>Generate & Play</button>
        <textarea
          className="input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
      </div>

      <div className="out">
        <div>{status}</div>
        <audio ref={audioRef}></audio>
      </div>
    </div>
  );
}

export default App;
