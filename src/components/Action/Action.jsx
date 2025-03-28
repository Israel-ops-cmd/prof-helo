import "./Action.css"

function Action() {
    return (
        <div className="principal">
            <h1>Transforme o aprendizado do seu filho!</h1>
            <h4>Agende uma aula experimental gratuita e veja a diferença!</h4>
            <a 
                href="https://wa.me/558491814786?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20e%20conhecer%20mais%20sobre%20o%20seu%20trabalho.%20:)"
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
            >
                <button className="aperty">Agende sua aula experimental!</button>
            </a>
        </div>
    )
}

export default Action