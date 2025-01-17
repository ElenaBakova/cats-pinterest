import {useCallback, useEffect, useRef, useState} from "react";
import '../../styles/Cats.css'
import CatCard from "../CatCard/CatCard.tsx";
import Loader from "../Loader/Loader.tsx";
import useFetchData from "../../hooks/useFetchData.ts";
import Message from "../Message/Message.tsx";
import {fetchMoreCats} from "../../utils/TheCatApi.ts";

const Cats = () => {
    const [page, setPage] = useState<number>(1);
    const bottom = useRef<HTMLDivElement>(null);
    const {isLoading, error, hasMore, items} = useFetchData(page, fetchMoreCats);

    const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
        if (isLoading) {
            return;
        }
        if (entries[0].isIntersecting) {
            setPage(prevPage => prevPage + 1);
        }
    }, [isLoading]);

    useEffect(() => {
        const option = {
            rootMargin: "20px",
            threshold: 0.5
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (bottom.current) {
            observer.observe(bottom.current)
        }
        return () => {
            observer.disconnect();
        };
    }, [handleObserver]);

    return (
        <>
            {error && <Message text={"Не смогли получить котиков :("}/>}
            {!error &&
                <div className="cats">
                    {items.map((item, index) => (
                        <div key={index}>
                            <CatCard url={item.url} id={item.id}/>
                        </div>
                    ))}
                </div>
            }
            {hasMore && !error && <Loader/>}
            {!error && !isLoading && <div ref={bottom}/>}
        </>
    );
}
export default Cats;