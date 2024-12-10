interface ISize {
  text: string;
  black: boolean | undefined;
}
const Size = ({ text, black = false }: ISize) => {
  return (
    <div
      className={`rounded-[62px] text-sm leading-[18.9px] py-[10px] hover:bg-black hover:text-white px-5 cursor-pointer ${
        black === true ? "bg-black text-white" : "bg-white text-[#00000099]"
      }`}
    >
      {text}
    </div>
  );
};

export default Size;
