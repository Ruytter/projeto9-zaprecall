import "./App.css";
import Header from "./header";
import Section from "./section";
import Footer from "./footer";
import { useState } from "react";
function App() {
  const perguntasAbertas = [
    { Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
    {
      Q: "O React é __",
      R: "uma biblioteca JavaScript para construção de interfaces",
    },
    { Q: "Componentes devem iniciar com __", R: "letra maiúscula" },
    { Q: "Podemos colocar __ dentro do JSX", R: "expressões" },
    {
      Q: "O ReactDOM nos ajuda __",
      R: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      Q: "Usamos o npm para __",
      R: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      Q: "Usamos props para __",
      R: "passar diferentes informações para componentes",
    },
    {
      Q: "Usamos estado (state) para __",
      R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];
  const [cont, setCont]=useState(1)
  const [resp, setResp]=useState(0)
  const [memoria, setMemoria]= useState("")
  const [hidegiro, setHidegiro]= useState([
    {hide:false, giro:false, memoria:"espera"},
    {hide:false, giro:false, memoria:"espera"},
    {hide:false, giro:false, memoria:"espera"},
    {hide:false, giro:false, memoria:"espera"},
    {hide:false, giro:false, memoria:"espera"},
    {hide:false, giro:false, memoria:"espera"},
    {hide:false, giro:false, memoria:"espera"},
    {hide:false, giro:false, memoria:"espera"},
  ])

  function abrirPergunta(i) {
    if (cont ===1){
    let novoHidegiro = [...hidegiro]
    novoHidegiro[i].hide= true
    setHidegiro([...novoHidegiro])
    }
    setCont(0)
  }
  function girar(i){
    let novoHidegiro = [...hidegiro]
    novoHidegiro[i].giro= true
    novoHidegiro[i].memoria= "respondido"
    setHidegiro([...novoHidegiro])
  }

  function memory (i, m){
    if (i!==-1){
      let novoHidegiro = [...hidegiro]
    novoHidegiro[i].memoria= m
    setHidegiro([...novoHidegiro])
    }else{
      setMemoria(m)
      setCont(1)
      setResp(resp + 1)
      //console.log(memoria)
    }
  }

  return (
    <div className="App">
      <div className="screen-container">
        <Header />
        <Section perguntasAbertas = {perguntasAbertas} abrirPergunta={abrirPergunta} girar={girar} hidegiro={hidegiro} memory={memory} memoria={memoria}/>
        <Footer memory = {memory} resp = {resp}/>
      </div>
    </div>
  );
}

export default App;
