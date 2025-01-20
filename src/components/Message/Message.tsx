import "./Message.css";

const Message = ({ text }: { text: string }) => {
  return (
    <div className="message-wrapper">
      <img src={"/cats-pinterest/kitty.png"} alt={"Kitty"} className="kitty-png" />
      <p className={"text-field"}>{text}</p>
    </div>
  );
};

export default Message;
