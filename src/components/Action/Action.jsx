import "./Action.css"

function Action() {
    return (
        <div className="t-align al-center sections" id="totally">
            <h2 className="title">Agende sua aula de forma rápida e fácil</h2>
            <h4>Não perca mais tempo, comece agora a melhorar os resultados escolares do seu filho.</h4>
            <a 
                href="https://wa.me/558491814786?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20e%20conhecer%20mais%20sobre%20o%20seu%20trabalho.%20:)"
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
            >
                <button className="cta-button bt">Agendar Agora</button>
            </a>
        </div>
    )
}

export default Action