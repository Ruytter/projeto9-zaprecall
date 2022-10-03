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

  const [hidegiro, setHide]= useState([
    {hide:true, giro:true},
    {hide:true, giro:true},
    {hide:true, giro:true},
    {hide:true, giro:true},
    {hide:true, giro:true},
    {hide:true, giro:true},
    {hide:true, giro:true},
    {hide:true, giro:true}
  ])

  function abrirPergunta(i) {
    let novoHidegiro = [...hidegiro]
    novoHidegiro[i].hide= false
    setHide([...novoHidegiro])
  }
  function girar(i){
    let novoHidegiro = [...hidegiro]
    novoHidegiro[i].giro= false
    setHide([...novoHidegiro])
  }

  return (
    <div className="App">
      <div className="screen-container">
        <Header />
        <Section perguntasAbertas = {perguntasAbertas} abrirPergunta={abrirPergunta} girar={girar} hidegiro={hidegiro}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
