import "./CatCard.css"
import Heart from "../Heart/Heart.tsx";

interface CatCardProps {
    url: string;
    index: number;
}

const CatCard = ({url, index}: CatCardProps) => {
    return (
        <div className={'catCard'}>
            <div className="heart">
                <Heart index={`${index}`} />
            </div>
            <img src={url} alt={`cat_${url}`} className="cat-image"/>
        </div>
    );
}

export default CatCard;