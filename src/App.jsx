import { useEffect, useRef, useState } from "react";
import "./App.css"
import Respuestas from "./components/Respuestas";
import preguntasRespuestas from "./db/preguntasRespuestas.json";
import Modal from "./components/Modal";

function App() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntosTotales, setPuntosTotales] = useState(0)
  const [show, setShow] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    
  }, [])
  
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
    <div className="h-screen w-full bg-blue-900 bg-gradient-to-r from-blue-800 border-4 border-yellow-300">
      <div className="h-full flex flex-col justify-center items-center gap-8">
        
        <audio ref={audioRef} autoPlay loop preload="auto">
          <source src="/1m.mp3" type="audio/mpeg" />
        </audio>
        <p className="py-5 px-11 border-4 border-white rounded-xl text-white bg-black text-9xl font-black">
          {puntosTotales}
        </p>
        <section className="w-2/3 border-4 bg-black grid grid-cols-2 gap-6 text-white p-6 rounded-2xl text-center">
            {preguntasRespuestas[preguntaActual].respuestas.map((respuesta, index )=> (
              <Respuestas
              key={respuesta.id}
              respuesta={respuesta}
              sumarPuntos={sumarPuntos}
              index={index}
            />
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
