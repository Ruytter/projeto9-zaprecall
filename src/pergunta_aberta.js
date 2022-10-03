function Pergunta(props) {
  const { perguntasAbertas, i, abrirPergunta, girar, hidegiro } = props;

  if (hidegiro[i].hide === true) {
    return (
      <div className="pergunta-fechada">
        <p>Pergunta {i + 1}</p>
        <img
          src="./assets/img/seta_play.png"
          alt=""
          onClick={() => abrirPergunta(i)}
        />
      </div>
    );
  } else if (hidegiro[i].giro === true) {
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
