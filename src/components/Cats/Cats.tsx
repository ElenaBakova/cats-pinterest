import {useEffect, useState} from "react";
import './Cats.css'
import {fetchMoreCats} from "../../utils/TheCatApi.ts";
import CatCard from "../CatCard/CatCard.tsx";

interface ImageItem {
    id: string;
    url: string;
    width: number;
    height: number;
}

const Cats = () => {
    const [items, setItems] = useState<ImageItem[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        fetchMoreData();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) {
            return;
        }
        fetchMoreData();
    };

    const fetchMoreData = async () => {
        try {
            const response = await fetchMoreCats();
            const data = await response.json();
            console.log(data);
            setItems(prevItems => [...prevItems, ...data]);
            console.log(page);
            setPage(prevPage => prevPage + 1);
            if (data.length === 0) {
                setHasMore(false);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="cats">
            {items.map((item, index) => (
                <div key={index}>
                    <CatCard url={item.url} index={index} />
                </div>

            ))}
        </div>
    );
}
export default Cats;