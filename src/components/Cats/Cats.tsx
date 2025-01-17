import {useCallback, useEffect, useState} from "react";
import './Cats.css'
import CatCard from "../CatCard/CatCard.tsx";
import Loader from "../Loader/Loader.tsx";
import useFetchData from "../../hooks/useFetchData.ts";
import Message from "../Message/Message.tsx";

const Cats = () => {
    const [page, setPage] = useState<number>(1);
    const {isLoading, error, hasMore, items} = useFetchData(page);

    const handleScroll = useCallback(() => {
        if (isLoading) {
            return;
        }
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) {
            return;
        }
        setPage(prevPage => prevPage + 1);
    }, [hasMore, isLoading])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <>
            {error && <Message text={"Не смогли получить котиков :("}/>}
            {!error &&
                <div className="cats">
                    {items.map((item, index) => (
                        <div key={index}>
                            <CatCard url={item.url} index={index}/>
                        </div>

                    ))}
                </div>
            }
            {hasMore && !error && <Loader/>}
        </>
    );
}
export default Cats;