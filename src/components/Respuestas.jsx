import { useState } from "react";

const Respuestas = ({ respuesta, sumarPuntos, index }) => {
  const [flipped, setFlipped] = useState(false);
  const [showName, setShowName] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);

    // Retrasa la visualización de respuesta.nombre en 1000ms
    setTimeout(() => {
      setShowName(true);
    }, 900);

    // Suma los puntos después de un tiempo (en este caso, después de 1000ms)
    setTimeout(() => {
      sumarPuntos(respuesta.puntos);
    }, 1000);
  };

  return (
    <div
      className={`relative flex justify-between items-center cursor-pointer px-5 py-7 text-black font-bold text-6xl uppercase ${
        flipped
          ? "bg-green-500 bg-gradient-to-r from-green-400 animate-rotate-y animate-once animate-ease-out animate-reverse animate-fill-both"
          : "bg-blue-500 bg-gradient-to-r from-blue-400"
      }`}
      onClick={handleClick}
    >
      {(flipped && showName) ? (
        <>
          <p className="text-center w-full">
            {showName && respuesta.nombre}
          </p>
          <p className="border-l-4 border-black text-center w-20">
            {showName && respuesta.puntos}
          </p>{" "}
        </>
      ) : (
        <p style={{ WebkitTextStroke: '1px white', fontSize: 'larger' }} className="text-center w-full font-black relative">
          <span className="animation absolute left-24 -top-3 text-[130px] text-transparent">{index + 1}</span>
          <span>{index + 1}</span>
          <span className="animation absolute -top-[65px] right-24 text-[130px] text-transparent">{index + 1}</span>
        </p>
      )}
    </div>
  );
};

export default Respuestas;
