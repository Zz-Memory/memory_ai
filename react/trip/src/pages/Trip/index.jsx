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
    Loading,
    Toast
} from 'react-vant';
import { 
  ChatO,
  UserO 
} from '@react-vant/icons';

const Trip = () => {
  useTitle("旅游聊天客服");
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  // 数据驱动界面
  // 静态界面
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: 'hello~',
      role: 'assistant'
    },
    {
      id: 2,
      content: 'hello~',
      role: 'user'
    }
  ]);


  const handleChat = async () => {
    if(text.trim() === '') {
      Toast.info({
        message: '内容不能为空'
      })
      return;
    }
    setIsSending(true);
    setText('');
    setMessages((prev) => {
      return [
        ...prev,
        {
          role: 'user',
          content: text,
        }
      ]
    })
    const newMessage = await kimiChat([{
      role: 'user',
      content: text
    }]);
    setMessages((prev) => {
      return [
        ...prev,
        newMessage.data
      ]
    })
    setIsSending(false);
  }
  return (
    <div className='flex flex-col h-all'>
      <h1>Trip</h1>
      <div className={`flex-1 ${styles.chatArea}`}>
        {
          messages.map((msg,index) => {
            return (
              <div 
                key={index}
                className={
                  msg.role === 'user' ? 
                  styles.messageRight : 
                  styles.messageLeft
                }
              >
                {
                  msg.role === 'system' ? 
                  <ChatO/> : 
                  <UserO/>
                }
                {msg.content}
              </div> 
            )
          })
        }
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
