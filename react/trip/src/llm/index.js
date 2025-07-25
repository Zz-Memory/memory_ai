/**
 * chat 聊天
 */

// 请求地址
const DEEPSEEK_CHAT_API_URL = "https://api.deepseek.com/v1/chat/completions";
const KIMI_CHAT_API_URL = "https://api.moonshot.cn/v1/chat/completions";

export const chat = async (
  messages,
  api_url,
  api_key,
  model
) => {
  try {
    const response = await fetch(api_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api_key}`,
      },
      body: JSON.stringify({
        model,
        messages,
        stream: false,
      }),
    });
    const data = await response.json();
    return {
      code: 0,
      data: {
        role: "assistant",
        content: data.choices[0].message.content,
      },
    };
  } catch (err) {
    return {
      code: 0,
      msg: "出错了...",
    };
  }
};
export const kimiChat = async (messages) => {
  const res = await chat(
    messages,
    KIMI_CHAT_API_URL,
    import.meta.env.VITE_KIMI_API_KEY,
    "moonshot-v1-auto"
  );
  return res;
};
export const deepseekChat = async (messages) => {
  const res = await chat(
    messages,
    DEEPSEEK_CHAT_API_URL,
    import.meta.env.VITE_DEEPSEEK_API_KEY,
    "deepseek-r1"
  );
  return res;
};
  