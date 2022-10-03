import Pergunta from "./pergunta_aberta";

function Section(props) {
  const { perguntasAbertas, abrirPergunta, girar, hidegiro } = props;
  return (
    <section>
      {perguntasAbertas.map((p, index)=> <Pergunta key={index} perguntasAbertas = {p} i={index} abrirPergunta={abrirPergunta} girar={girar} hidegiro={hidegiro}/>)}
    </section>
  );
}

export default Section;
