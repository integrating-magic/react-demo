//create a button function component. Export it so it can be used in other files
export default function Button({ button, setBtn }) {
  const getButtonNumber = (btnText) => {
    const match = btnText.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const buttonNumber = getButtonNumber(button.btnText);
  const isEven = buttonNumber % 2 === 0 && buttonNumber > 0;
  const isSpecial = buttonNumber === 1000;

  return (
    <button
      className={`px-4 py-3 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg ${
        isSpecial
          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          : isEven
          ? "bg-blue-600 hover:bg-blue-700"
          : "bg-orange-600 hover:bg-orange-700"
      }`}
      onClick={() => {
        setBtn(button);
        // FileMaker.PerformScript("Run Script", text);
      }}
    >
      <div className="flex items-center gap-2">
        <span>{isSpecial ? "⭐" : isEven ? "🔵" : "🟠"}</span>
        <span>{button.btnText}</span>
      </div>
    </button>
  );
}
