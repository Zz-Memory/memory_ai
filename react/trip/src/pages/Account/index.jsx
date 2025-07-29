import useTitle from "@/hooks/useTitle";
import { useState } from "react";
import {
  Image,
  Cell,
  CellGroup,
  ActionSheet,
  Popup,
  Loading,
} from "react-vant";
import {
  ServiceO,
  FriendsO,
  StarO,
  SettingO,
  UserCircleO,
  AddO,
  CartO,
  ChatO,
  FireO,
  LikeO,
  Search,
  HomeO,
  UserO,
} from "@react-vant/icons";
import styles from "./account.module.css";
import { generateAvatar } from "@/llm";

const gridData = [
  { icon: <AddO />, text: "添加" },
  { icon: <CartO />, text: "购物车" },
  { icon: <ChatO />, text: "聊天" },
  { icon: <FireO />, text: "热门" },
  { icon: <LikeO />, text: "喜欢" },
  { icon: <StarO />, text: "收藏" },
  { icon: <Search />, text: "搜索" },
  { icon: <HomeO />, text: "首页" },
  { icon: <UserO />, text: "我的" },
];

const Account = () => {
  const [userInfo, setUserInfo] = useState({
    nickname: "理塘丁真",
    level: "5级",
    slogan: "芝士雪豹",
    avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  });
  const [showActionSheet, setShowActionSheet] = useState(false);
  const actions = [
    {
      name: "AI上传头像",
      color: "#123123",
      type: 1,
    },
    {
      name: "上传头像",
      color: "#ee0a24",
      type: 2,
    },
  ];

  const handleAction = (e) => {
    console.log(e);
    if (e.type === 1) {
      // AI生成头像
      const text = `
            昵称：${userInfo.nickname}
            签名：${userInfo.slogan}
        `;
      const newAvatar = generateAvatar(text);
      setUserInfo({
        ...userInfo,
        avatar: newAvatar,
      });
    } else if (e.type === 2) {
      // 上传头像
    }
  };
  useTitle("我的");
  return (
    <div>
      <h1>Account</h1>
      <div className={styles.container}>
        <div className={styles.user}>
          <Image
            round
            width="64px"
            height="64px"
            src={userInfo.avatar}
            style={{ cursor: "pointer" }}
            onClick={() => setShowActionSheet(true)}
          />
          <div className="ml4">
            <div className={styles.nickname}>昵称：{userInfo.nickname}</div>
            <div className={styles.level}>等级：{userInfo.level}</div>
            <div className={styles.slogan}>签名：{userInfo.slogan}</div>
          </div>
        </div>
      </div>
      <div className="mt3">
        <CellGroup inset>
          <Cell title="服务" icon={<ServiceO />} />
        </CellGroup>
        <CellGroup inset className="mt2">
          <Cell title="收藏" icon={<StarO />} />
          <Cell title="朋友圈" icon={<FriendsO />} />
        </CellGroup>
        <CellGroup inset className="mt2">
          <Cell title="设置" icon={<SettingO />} />
        </CellGroup>
      </div>
      <ActionSheet
        visible={showActionSheet}
        actions={actions}
        cancelText="取消"
        onCancel={() => setShowActionSheet(false)}
        onSelect={(e) => handleAction(e)}
      ></ActionSheet>
      <div className={styles.gridContainer}>
        {gridData.map((item, index) => (
          <div className={styles.gridItem} key={index}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.gridTitle}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Account;
