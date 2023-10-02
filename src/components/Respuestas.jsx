
const Respuestas = ({ respuesta, sumarPuntos }) => {
  const handleClick = () => {
    sumarPuntos(respuesta.puntos);
  };

  return (
    <div className="flex justify-between cursor-pointer bg-green-500 bg-gradient-to-r from-green-400 p-5 text-black font-bold text-4xl uppercase" onClick={handleClick}>
      <span className="text-center w-full">{respuesta.nombre}</span>
      <span className="border-l-4 border-black text-center w-20">{respuesta.puntos}</span>
    </div>
  );
};

export default Respuestas;
