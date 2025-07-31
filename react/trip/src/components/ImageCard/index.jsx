import styles from '@/components/ImageCard/card.module.css';
import { 
    useRef,
    useEffect, 
} from 'react';
const ImageCard = (props) => {
    const { url,height } =  props;
    const imgRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry],obs) => {
            if(entry.isIntersecting){
                const img = entry.target;
                img.src = img.dataset.src;
                obs.unobserve(img);
            }
        })
        // img.src = img.dataset.src || '';
        if(imgRef.current) {
            observer.observe(imgRef.current);
        }
    },[])
    return (
        <div style={{height}} className={styles.card}>
            <img ref={imgRef} data-src={url} className={styles.img} />
        </div>
    );
}

export default ImageCard;