import { ServicesCard } from "./ServicesCard";

export function Services() {
  return (
    <section id="services" className="mt-28 m-auto text-center mb-40 bg-green-50">
      <h3 className="text-sm text-green-500 font-bold mb-4">SERVIÇOS</h3>
      <p className="text-3xl font-bold text-black-800 w-[314px] m-auto px-8">
        Como podemos ajudá-lo a se sentir melhor?
      </p>
      <div
        className="mt-16 m-auto w-[327px] sm:w-[1121px] flex flex-col sm:grid 
        sm:grid-rows-2 sm:grid-cols-3 text-left gap-8"
      >
        <ServicesCard
          title="Problemas Digestivos"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
          amet sint. Velit officia consequat duis enim."
        />
        <ServicesCard
          title="Saúde Hormonal"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
          amet sint. Velit officia consequat duis enim."
        />
        <ServicesCard
          title="Bem-estar mental"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
          amet sint. Velit officia consequat duis enim."
        />
        <ServicesCard
          title="Cuidados Pediátricos"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
          amet sint. Velit officia consequat duis enim."
        />
        <ServicesCard
          title="Autoimune e Inflamação"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
          amet sint. Velit officia consequat duis enim."
        />
        <ServicesCard
          title="Saúde do Coração"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
          amet sint. Velit officia consequat duis enim."
        />
      </div>
    </section>
  );
}
