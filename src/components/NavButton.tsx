interface NavButtonProps {
  text: string;
  hidden?: boolean;
}

export function NavButton({ text, hidden }: NavButtonProps) {
  return (
    <button
      style={{ display: hidden ? "block" : "none" }}
      className="sm:block mt-12 sm:mt-0 border 
      border-solid bg-white-100 
      sm:bg-green-100 sm:border-green-500 font-bold text-lg sm:text-sm 
      text-green-500 rounded-full px-8 py-4 sm:px-6 sm:py-2
      hover:bg-green-500 hover:text-white-100 transition-all duration-200"
    >
      {text}
    </button>
  );
}
