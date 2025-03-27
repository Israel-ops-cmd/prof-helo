import "./Garantia.css"

function Garantia () {
    return (
        <div className="garantia-container">
            <h2>Meu compromisso é com você!</h2>
            <h3>Estou aqui para ajudar seu filho a alcançar seus objetivos com aulas de qualidade, sempre com confiança, sinceridade e transparência.</h3>
            <a 
                href="https://wa.me/558491814786?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20e%20conhecer%20mais%20sobre%20o%20seu%20trabalho.%20:)"
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
            >
                <button className="cta-button bt">Agende sua aula agora!</button>
            </a>
        </div>
    )
}

export default Garantia