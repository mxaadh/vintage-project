type ButtonProps = {
  name: string;
};

const Button = ({ name } : ButtonProps) => {
  return (
    <button
      type="submit"
      className="w-[240px] flex justify-center bg-Terracotta  hover:bg-AntiqueGold text-MutedSand p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
    >
      {name}
    </button>
  );
};

export default Button;
