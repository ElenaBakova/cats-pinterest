import {useCallback, useEffect, useState} from "react";

interface ImageItem {
    id: string;
    url: string;
    width: number;
    height: number;
}

const useFetchData = (page: number, fetchMoreCats: () => Promise<Response>) => {
    const [items, setItems] = useState<ImageItem[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(false);

    const fetchMoreData = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await fetchMoreCats();
            const data = await response.json();
            setItems(prevItems => [...prevItems, ...data]);
            if (data.length === 0) {
                setHasMore(false);
            }
        } catch (error) {
            console.error(error);
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }, [fetchMoreCats]);

    useEffect(() => {
        if (page === 1) {
            fetchMoreData();
        } else {
            const fetch = setTimeout(() => fetchMoreData(), 500);
            return () => {
                clearTimeout(fetch);
            };
        }
    }, [fetchMoreData, page]);

    return {isLoading, error, hasMore, items};
}

export default useFetchData;