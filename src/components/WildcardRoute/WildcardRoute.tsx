import "./WildcardRoute.css"

const WildcardRoute = () => {
    return (
        <div className="wildcard-wrapper">
            <img src={"/kitty.png"} alt={"Kitty"} className="kitty-png"/>
            <p className={"text-field"}>
                Такой страницы нет :(
            </p>
        </div>
    );
}
export default WildcardRoute;