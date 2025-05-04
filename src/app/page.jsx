"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [peso, setPeso] = useState(67);
  const [altura, setAltura] = useState(1.81);
  const [result, setResult] = useState('00.00');
  const [classificacao, setClassificacao] = useState('');
  const [data, setData] = useState(new Date());
  const [day, setDay] = useState(['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']);
  const [training, setTraining] = useState(['Descansar', 'Braços', 'Costas', 'Peito', 'Quadríceps', 'Posterior', 'Focar no cardio']);


  return (
    <main>
      <div className="imc">
        <form action="">
          <h2>Seu IMC</h2>
          <input type="text" placeholder="Peso" onChange={(e) => setPeso(Number(e.target.value))}/>
          <input type="text" placeholder="Altura" onChange={(e) => setAltura(Number(e.target.value)/100)}/>
          <button type="button" 
            onClick={() => {
              setResult((peso / (altura * altura)).toFixed(2));
              const imc = (peso / (altura * altura)).toFixed(2);
              if (imc < 18.5) {
                setClassificacao('abaixo do ideal');
              } else if (imc >= 18.5 && imc < 24.9) {
                setClassificacao('normal');
              } else if (imc >= 25 && imc < 29.9) {
                setClassificacao('acima do ideal');
              } else {
                setClassificacao('em estado de obesidade');
              }
            }
          }>Calcular</button>
          <p className="classificacao">{result}</p>
          <p>Seu peso está {classificacao} </p>
        </form>
      </div>
      <div className="imc">
          <h2>{day[data.getDay()]}</h2>
          <p>Dia ideal para <span className="day-training">{training[data.getDay()]}</span></p>
          <ul>
            <li>beba água</li>
            <li>coma frutas</li>
            <li>treine</li>
            <li>descanse</li>
          </ul>
      </div>
      <div className="links">
        <Link href="/treino" className="go">Ir para o treino!</Link>
      </div>
    </main>
  );
}
