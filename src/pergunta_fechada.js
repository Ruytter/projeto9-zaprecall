function PerguntaFechada(props) {
  const i = props.perguntasAbertas;
  const {abrirPergunta} = props
    return (
    <div className="pergunta-fechada">
      <p>Pergunta {i+1}</p>
      <img
        src="./assets/img/seta_play.png"
        alt=""
        onClick={() => abrirPergunta(i)}
      />
    </div>
  );
}

export default PerguntaFechada;
