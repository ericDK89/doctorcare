import '../styles/services.scss';

export function Stats() {
  return (
    <article id="stats"
      className="flex flex-col sm:flex-row gap-16 sm:gap-52 justify-center 
      items-center text-center border border-solid border-green-100 py-16 
      bg-beige-100 rounded-lg w-80 m-auto sm:w-full"
    >
      <div>
        <h2 className="mb-3 text-black-800 text-5xl font-bold">+3.500</h2>
        <span className="text-base text-green-500">Pacientes atendidos</span>
      </div>
      <div>
        <h2 className="mb-3 text-black-800 text-5xl font-bold">+15</h2>
        <span className="text-base text-green-500">
          Especialistas disponíveis
        </span>
      </div>
      <div>
        <h2 className="mb-3 text-black-800 text-5xl font-bold">+10</h2>
        <span className="text-base text-green-500">Anos no mercado</span>
      </div>
    </article>
  );
}
