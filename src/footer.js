function Footer(){

    const VERDE = "#2FBE34"
    const AMARELO = "#FF922E"
    const VERMELHO = "#FF3030"
    const CINZA = "#333333" 

    return(
        <footer className="footer-concluidos">
            <div className="container-botoes">
                <button style={{background: VERMELHO }}>Não lembrei</button><button style={{background: AMARELO}}>Quase não lembrei</button
                ><button style={{background: VERDE }}>Zap!</button>
            </div>
            <p>0/4 CONCLUÍDOS</p>
        </footer>
    )
}

export default Footer