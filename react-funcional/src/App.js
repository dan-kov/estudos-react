import React, { useState } from 'react';
import './App.css';

function App() {

  const [numero, setNumero] = useState(5);
  const [segundoNumero, setSegundoNumero] = useState(10);
  const [resultado, setResultado] = useState(15);


  const somar = () => {
    const nro1 = parseInt(numero);
    const nro2 = parseInt(segundoNumero);

    setResultado(nro1+nro2);
  }

  return (
    <div className="App">

      Número 1:
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)} /> <br/>
      Número 2:
      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} /> <br/>

      <button onClick={somar}>Somar</button>
      Resultado: 
      <input type="text" value={resultado} />

      
    </div>
  );
}

export default App;
