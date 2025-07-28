import { memo, useRef, useState, useEffect, useMemo } from "react";
import { ArrowLeft, Close } from "@react-vant/icons";
import styles from "@/components/SearchBox/search.module.css";
import { debounce } from "@/utils";

const SearchBox = (props) => {
  // /api
  // 子父通信
  // 单向数据流

  const [query, setQuery] = useState("");
  const { handleQuery } = props;
  // 搜索内容设置
  const handleChange = (e) => {
    let val = e.currentTarget.value;
    setQuery(val);
  };
  // 清除内容
  const clearQuery = () => {
    setQuery("");
    queryRef.current.value = "";
    queryRef.current.focus();
  };
  // 控制清除内容组件的显示
  const displayStyle = query ? { display: "block" } : { display: "none" };

  //   非受控组件
  const queryRef = useRef(null);

  // 1. 防抖
  // 2. useMemo 缓存debounce结果 否则会反复执行
  const handleQueryDebounce = useMemo(() => {
    return debounce(handleQuery, 300);
  }, []);

  useEffect(() => {
    console.log(query, "/////");
    handleQueryDebounce(query);
  }, [query]);

  return (
    <div className={styles.wrapper}>
      <ArrowLeft onClick={() => history.go(-1)} />
      <input
        className={styles.ipt}
        type="text"
        placeholder="搜索旅游相关"
        ref={queryRef}
        onChange={handleChange}
      />
      {/* 移动端用户体验 */}
      <Close
        onClick={clearQuery}
        style={{
          display: displayStyle,
        }}
      />
    </div>
  );
};

export default memo(SearchBox);
