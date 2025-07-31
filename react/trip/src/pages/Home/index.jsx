import useTitle from "@/hooks/useTitle";
import {
    Button
} from 'react-vant'
import { showToast } from "@/components/Toast/toastController";

const Home = () => {
    useTitle("奶龙首页");
    return (
        <div>
            <h1>Home</h1>
            <Button type="primary" onClick={() => showToast(3,6,9)}>showToast</Button>
        </div>
    )
}
export default Home;