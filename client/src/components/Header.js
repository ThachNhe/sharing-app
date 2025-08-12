import NoteCodeLogo from "../assets/NoteCodeLogo.svg";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="py-4">
        <img src={NoteCodeLogo} alt="NoteCode Logo" className="w-28 h-8" />
      </div>
      {/* Title */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-heading-small font-bold text-gray-800">
          Create & Share
        </h2>
        <h3 className="text-heading-large font-bold text-gray-800 ">
          Your Code Easily
        </h3>
      </div>
    </div>
  );
};
