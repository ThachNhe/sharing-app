import ShareSvg from "../assets/Share.svg";

export const ShareIcon = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        src={ShareSvg}
        alt="Share"
        className="inline-block mr-2 color"
        style={{ width: "20px", height: "20px" }}
      />
    </div>
  );
};
