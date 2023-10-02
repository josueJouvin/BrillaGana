import { useState } from "react";
import "./App.css"
import Respuestas from "./components/respuestas";
import preguntasRespuestas from "./db/preguntasRespuestas.json";
import Modal from "./components/Modal";

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntosTotales, setPuntosTotales] = useState(0)
  const [show, setShow] = useState(false)

  function handleShow() {
    setShow(!show)
  }
  const mostrarSiguientePregunta = () => {
    if (preguntaActual < preguntasRespuestas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
      setPuntosTotales(0)
    }
  };

  const mostrarPreguntaAnterior = () => {
    if (preguntaActual > 0) {
      setPreguntaActual(preguntaActual - 1);
      setPuntosTotales(0)
    }
  };

  const sumarPuntos = (puntosAgregados) => {
    setPuntosTotales(puntosTotales + puntosAgregados);
  };

  return (
    <div className="h-screen w-full bg-blue-900 bg-gradient-to-r from-blue-800 border-4 border-yellow-300 relative">
      <div className="h-full flex flex-col justify-center items-center gap-8">
        <h1 className="uppercase bg-gradient-to-r from-[#ffdd00] to-[#ffae00] bg-clip-text text-transparent text-[75px] font-bold mb-5">brilla y gana</h1>
        <span className="py-6 px-10 border-8 border-black rounded-xl text-white text-8xl font-black">
          {puntosTotales}
        </span>
        <section className="w-3/5 border-4 bg-black grid grid-cols-2 gap-6 text-white p-5 rounded-2xl">
            {preguntasRespuestas[preguntaActual].respuestas.map(respuesta => (
              <Respuestas key={respuesta.id} respuesta={respuesta} sumarPuntos={sumarPuntos}/>
            ))}
        </section>

        {preguntaActual > 0 && (
          <button className="absolute bottom-0 left-0 p-10 opacity-0" onClick={mostrarPreguntaAnterior}>Pregunta Anterior</button>
        )}
        {preguntaActual < preguntasRespuestas.length - 1 && (
          <button className="absolute bottom-0 right-0 p-10 opacity-0" onClick={mostrarSiguientePregunta}>Siguiente Pregunta</button>
        )}
        <button onClick={handleShow} className="z-40 absolute top-0 right-0 p-10 opacity-0">X</button>
        {
          show ? <Modal/> : null
        }
      </div>
    </div>
  );
}

export default App;
