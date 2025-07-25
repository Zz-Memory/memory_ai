import {
    useEffect,
    useState,
} from 'react';
import useTitle from "@/hooks/useTitle";
import {
    kimiChat,
} from '@/llm';
import styles from '@/pages/Trip/trip.module.css';
import {
    Input,
    Button,
    Loading
} from 'react-vant';

const Trip = () => {
  useTitle("旅游聊天客服");
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChat = async () => {
    if(text.trim() === '') {
      return;
    }
    setIsSending(true);
  }
  return (
    <div className='flex flex-col h-all'>
      <h1>Trip</h1>
      <div className={`flex-1 ${styles.chatArea}`}>

      </div>
      <div className={`flex ${styles.inputArea}`}>
        <Input
            value={text}
            onChange={(e) => {setText(e)}}
            placeholder="请输入消息"
            className={`flex-1 ${styles.input}`}
        ></Input>
        <Button disabled={isSending} type="primary" onClick={handleChat}>发送</Button>
      </div>
      {isSending && <div className="fixed-loading"><Loading type='ball' /></div>}
    </div>
  );
};
export default Trip;
