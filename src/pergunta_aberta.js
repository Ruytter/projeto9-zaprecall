function Pergunta(props) {
  const { perguntasAbertas, i, abrirPergunta, girar, hidegiro, memory, memoria } = props;
  let color="", icon="./assets/img/play-outline-icon.svg", click=abrirPergunta
   if (memoria==="Nao" && hidegiro[i].memoria === "respondido"){
    memory(i, memoria)
    memory(-1, "")
   }
   if(hidegiro[i].memoria === "Nao"){
    icon = "./assets/img/close-circle-icon.svg"
    color= "#FF3030"
    click=""
   }
   if (memoria==="Quase" && hidegiro[i].memoria === "respondido"){
    memory(i, memoria)
    memory(-1, "")
   }
   if(hidegiro[i].memoria === "Quase"){
    icon = "./assets/img/help-circle-icon.svg"
    color= "#FF922E"
    click=""
   }
   if (memoria==="Zap" && hidegiro[i].memoria === "respondido"){
    memory(i, memoria)
    memory(-1, "")
   }
   if(hidegiro[i].memoria === "Zap"){
    icon = "./assets/img/checkmark-circle-icon.svg"
    color= "#2FBE34"
    click=""
   }

   console.log(memoria, "   ",hidegiro[i].memoria)

  if (hidegiro[i].hide === false || (hidegiro[i].memoria !== "espera" && hidegiro[i].memoria !== "respondido")) {
    
    return (
      <div className="pergunta-fechada" style={{color: color }}>
        <p style={{color: color }}>Pergunta {i + 1}</p>
        <ion-icon
          src={icon}
          alt=""
          onClick={() => click(i)}
        ></ion-icon>
      </div>
    );
  } else if (hidegiro[i].giro === false) {
    return (
      <div className="pergunta-aberta">
        <div className="front-face face">
          <p>{perguntasAbertas.Q}</p>
          <div>
            <img
              src="./assets/img/seta_virar.png"
              alt=""
              onClick={() => girar(i)}
            />
          </div>
        </div>
        <div className="back-face face">
          <p>{perguntasAbertas.R}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="pergunta-aberta girar">
        <div className="front-face face">
          <p>{perguntasAbertas.Q}</p>
          <div>
            <img
              src="./assets/img/seta_virar.png"
              alt=""
              onClick={() => girar(i)}
            />
          </div>
        </div>
        <div className="back-face face">
          <p>{perguntasAbertas.R}</p>
        </div>
      </div>
    );
  }
}
export default Pergunta;
