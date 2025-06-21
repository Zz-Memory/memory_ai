import { useState } from "react";
import "./App.css";

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  // react 内置的hook(钩子)函数，快速地解决一些问题，响应式的数据状态
  // useRef DOM 等对象的绑定
  const [content, setContent] = useState("");
  const [imgBase64Data, setImgBase64Data] = useState("");
  const [isValid, setIsValid] = useState(false);

  // base64 => google 推出的编码方案
  const updateBase64Data = (e) => {
    // 拿到图片 e (html5 File 使用js和操作系统本地文件交互)
    const file = e.target.files[0];
    // console.log(file);
    if (!file) {
      return;
    }
    // html5 读的方式 读取文件
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // 异步操作（等待文件加载完毕后执行）
    reader.onload = () => {
      // console.log(reader.result);
      setImgBase64Data(reader.result);
      setIsValid(true);
    };
  };
  const update = async () => {
    if (!imgBase64Data) {
      return;
    }
    const endpoint = "https://api.moonshot.cn/v1/chat/completions";
    // 获取API密钥并去除可能的引号
    const apiKey = import.meta.env.VITE_API_KEY;
    const headers = {
      "Content-Type": "application/json",
      // 授权码 一般带上Bearer，表示这是一个 "持有者令牌"，即任何持有该令牌的客户端都可以访问受保护的资源。
      Authorization: `Bearer ${apiKey}`,
    };
    // 实时反馈给用户
    setContent('正在生成...');
    try {
      const response = await fetch(
        endpoint,
        {
          method: 'POST',
          // headers: headers,
          headers, // es6中，JSON key value 一样可以省略
          body: JSON.stringify({
            model: 'moonshot-v1-8k-vision-preview',
            messages: [
              {
                role: 'user',
                content: [
                  {
                    type: 'image_url',
                    image_url: {
                      "url": imgBase64Data
                    }
                  },
                  {
                    type: 'text',
                    text: '请描述图片的内容'
                  }
                ]
              }
            ]
          })
        }
      );
      
      if (!response.ok) {
        throw new Error(`API请求失败: ${response.status} ${response.statusText}`);
      }
      
      // 从服务端发送来的数据仍为二进制字节流
      // json 也是异步的
      const data = await response.json();
      if (data.choices && data.choices[0]) {
        setContent(data.choices[0].message.content);
      } else {
        setContent('返回数据格式不正确');
        console.error('API返回数据格式不正确:', data);
      }
    } catch (error) {
      setContent(`错误: ${error.message}`);
      console.error('API请求错误:', error);
    }
  };

  return (
    <div className="main">
      <div className="container">
        {/* label 标签关联 -> 无障碍访问 */}
        <label htmlFor="fileInput">文件：</label>
        <input
          id="fileInput"
          type="file"
          className="input"
          accept=".jpeg,.jpg,.png,.gif"
          onChange={updateBase64Data}
        />
        <button onClick={update} disabled={!isValid}>
          提交
        </button>
      </div>
      <div className="preview">
        {imgBase64Data && (
          <img
            src={imgBase64Data}
            alt="上传文件"
            style={{ width: 200, height: 200 }}
          />
        )}
      </div>
      <div>{content}</div>
    </div>
  );
}

export default App;
