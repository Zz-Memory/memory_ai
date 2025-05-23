// 入口文件
// console.log('胡老板的发量,羡慕');

// 模块化引入
// ai llm sdk 事实标准
import OpenAI from "openai/index.mjs";

const openai = new OpenAI({
  // 赚钱的 身份
  apiKey: "sk-wiybwxcwsqfbwmodahgeygnrzemnfmsoibxidotzolhutetr",
  // 国内转发服务商
  baseURL: "https://api.siliconflow.cn/v1",
});

// 完成接口
// await 等待
const response = await openai.completions.create({
  // 通义千问
  model: "Qwen/QwQ-32B",
  max_tokens: 256,
  temperature: 0.1,
  prompt: `
  Consideration product : 工厂现货PVC充气青蛙夜市地摊热卖充气玩具发光蛙儿童水上玩具

1. Compose human readable product title used on Amazon in english within 20 words.
2. Write 5 selling points for the products in Amazon.
3. Evaluate a price range for this product in U.S.

Output the result in json format with three properties called title, selling_points and price_range`,
});

console.log(response);