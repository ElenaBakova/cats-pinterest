import "./CatCard.css"
import Heart from "../Heart/Heart.tsx";

interface CatCardProps {
    url: string;
    id: string;
}

const CatCard = ({url, id}: CatCardProps) => {
    return (
        <div className={'catCard'}>
            <div className="heart">
                <Heart id={id} />
            </div>
            <img src={url} alt={`cat_${url}`} className="cat-image"/>
        </div>
    );
}

export default CatCard;