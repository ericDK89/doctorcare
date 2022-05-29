interface NavButtonProps {
  text: string;
  navbarBackground: boolean;
}

export function NavButton({ text, navbarBackground }: NavButtonProps) {
  return (
    <button
      className={`${
        !navbarBackground
          ? " sm:block mt-12 sm:mt-0 border hidden ml-48 sm:mb-0 border-solid bg-white-100 sm:bg-green-100 sm:border-green-500 font-bold text-lg sm:text-sm text-green-500 rounded-full px-6 py-2 hover:bg-green-500 hover:text-white-100 transition-all duration-200"
          : "sm:border-green-100 sm:block mt-12 sm:mt-0 border hidden ml-48 sm:mb-0 border-solid bg-white-100 sm:bg-green-500 font-bold text-lg sm:text-sm text-white-100 rounded-full px-6 py-2 hover:bg-white-100 hover:text-green-500 transition-all duration-200"
      }`}
    >
      {text}
    </button>
  );
}
