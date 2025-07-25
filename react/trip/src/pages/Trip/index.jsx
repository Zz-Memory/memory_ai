import {
    useEffect
} from 'react';
import useTitle from "@/hooks/useTitle";
import {
    kimiChat,
} from '@/llm';
import styles from 'trip.module.css';

const Trip = () => {
  useTitle("旅游聊天客服");
  useEffect(() => {
    const fetchChat = async() => {
        const res = await kimiChat([
            {
                role: 'user',
                content: '重庆旅游推荐'
            }
        ]);
        console.log(res);
    }
    fetchChat();
  }, [])
  return (
    <div>
      <h1>Trip</h1>
    </div>
  );
};
export default Trip;
