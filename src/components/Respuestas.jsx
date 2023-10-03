import { useState } from "react";

const Respuestas = ({ respuesta, sumarPuntos }) => {
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
      className={`flex justify-between cursor-pointer p-5 text-black font-bold text-4xl uppercase ${
        flipped
          ? "bg-green-500 bg-gradient-to-r from-green-400 animate-rotate-y animate-once animate-ease-out animate-reverse animate-fill-both"
          : "bg-blue-500 bg-gradient-to-r from-blue-400"
      }`}
      onClick={handleClick}
    >
      {(flipped && showName) ? (
        <>
          <span className="text-center w-full">
            {showName && respuesta.nombre}
          </span>
          <span className="border-l-4 border-black text-center w-20">
            {showName && respuesta.puntos}
          </span>{" "}
        </>
      ) : (
        <span className="text-center w-full">Incognito</span>
      )}
    </div>
  );
};

export default Respuestas;
