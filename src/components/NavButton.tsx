interface NavButtonProps {
  text: string;
}

export function NavButton({ text }: NavButtonProps) {
  return (
    <button
      className="sm:block mt-12 sm:mt-0 border hidden ml-48
      border-solid bg-white-100 sm:bg-green-100 sm:border-green-500 
      font-bold text-lg sm:text-sm text-green-500 rounded-full px-6 py-2
      hover:bg-green-500 hover:text-white-100 transition-all duration-200"
    >
      {text}
    </button>
  );
}
