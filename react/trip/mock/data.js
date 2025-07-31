import Mock from "mockjs";

// 每页显示10条数据
const getImages = (page,pageSize=10) => {
  return Array.from({length: pageSize},(_,i) => ({
    // 索引唯一
    id: `page${page}-${i}`,
    height: Mock.Random.integer(300,600),
    url: Mock.Random.image('300x400',Mock.Random.color(),'#fff','img')
  }))
}

export default [
  {
    url: "/api/search",
    method: "GET",
    timeout: 1000,
    response: (req, res) => {
      // ?keyword=释小龙
      const keyword = req.query.keyword;
      let num = Math.floor(Math.random() * 10);
      let list = [];
      for (let i = 0; i < num; i++) {
        // 随机内容
        const randomData = Mock.mock({
          title: "@ctitle",
        });
        console.log(randomData);
        list.push(`${randomData.title}${keyword}`);
      }
      return {
        code: 0,
        data: list,
      };
    },
  },
  {
    url: "/api/hotlist",
    method: "GET",
    timeout: 1000,
    response: (req, res) => {
      return {
        code: 0,
        data: [
          {
            id: "101",
            city: "北京",
          },
          {
            id: "102",
            city: "上海",
          },
          {
            id: "103",
            city: "福州",
          },
        ],
      };
    },
  },
  {
    url: "/api/detail/:id",
    method: "GET",
    timeout: 1000,
    response: (req, res) => {
      const randomData = Mock.mock({
        title: "@ctitle(5,10)",
        price: "@integer(60,100)",
        desc: "@cparagraph(10-30)",
        images: [
          {
            url: "@image(300x200,@color,#fff,图片)",
            alt: "@ctitle(5,10)",
          },
          {
            url: "@image(300x200,@color,#fff,图片)",
            alt: "@ctitle(5,10)",
          },
          {
            url: "@image(300x200,@color,#fff,图片)",
            alt: "@ctitle(5,10)",
          },
        ],
      });
      return {
        code: 0,
        data: randomData,
      };
    },
  },
  {
    url: '/api/images',
    method: 'GET',
    response:({query}) => {
      const page = Number(query.page) || 1;
      return {
        code:0,
        data:getImages(page),
      }
    }
  }
];
