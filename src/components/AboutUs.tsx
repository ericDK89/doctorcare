import doctorImg from "../assets/images/Doctor.png";

export function AboutUs() {
  return (
    <section
      className="flex sm:flex-row flex-col-reverse justify-center
      sm:items-center sm:gap-16 sm:py-40 py-28 bg-beige-100 px-6"
    >
      <article>
        <img src={doctorImg} alt="Doutor" />
      </article>
      <div className="max-w-[39rem] w-full">
        <span className="text-sm text-green-500 font-bold leading-[0.08em]">
          SOBRE NÓS
        </span>
        <h4 className="text-3xl sm:text-4xl font-bold mt-4 sm:mt-3 mb-6 text-black-800
        w-[20rem] sm:w-full
        ">
          Entenda quem somos e por que existimos
        </h4>
        <p className="text-gray-700 w-[20rem] sm:w-full mb-16 sm:mb-0">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim. Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint.
        </p>
      </div>
    </section>
  );
}
