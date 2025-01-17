import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <p style={{ fontSize: "18px", color: "#2196F3" }}>Загружаем котиков</p>
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loader;
