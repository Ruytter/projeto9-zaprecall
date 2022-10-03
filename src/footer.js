function Footer(props){

    const VERDE = "#2FBE34"
    const AMARELO = "#FF922E"
    const VERMELHO = "#FF3030"
    const CINZA = "#333333" 

    return(
        <footer className="footer-concluidos">
            <div className="container-botoes">
                <button style={{background: VERMELHO }} onClick={() => props.memory(-1,"Nao")}>Não lembrei</button><button style={{background: AMARELO}} onClick={() => props.memory(-1, "Quase")}>Quase não lembrei</button
                ><button style={{background: VERDE }} onClick={() => props.memory(-1, "Zap")}>Zap!</button>
            </div>
            <p>{props.resp/2}/8 CONCLUÍDOS</p>
        </footer>
    )
}

export default Footer