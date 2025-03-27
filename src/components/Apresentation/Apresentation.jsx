import "./Apresentation.css"
import heloImg from './../../assets/helo.png'

function Apresentation () {
    return (
        <div className="d-flex-row individually primary">
            <img src={heloImg} alt="" />
            <div className="d-flex-column">
                <h1 id="titulo">Quem sou eu?</h1>
                <p id="centralizado">Olá!<br></br></p>
                <p id="outher">
                Sou a prof. Helô, estudante de Pedagogia na UNINASSAU, e ensinar é minha grande paixão. Acredito que cada criança aprende de um jeito único, e meu objetivo é tornar esse processo leve, divertido e significativo. <br></br>
                Com carinho e dedicação, ajudo os pequenos a desenvolverem suas habilidades, superarem desafios e construírem confiança no aprendizado. Cada aula é uma oportunidade de incentivar o crescimento e despertar o gosto pelo conhecimento. <br></br>
                Mais do que ensinar conteúdos, busco criar um ambiente acolhedor, onde a criança se sinta segura para explorar, errar e aprender no seu próprio ritmo.<br></br>
                Se você procura alguém para apoiar a educação do seu filho com paciência e atenção, estou aqui para ajudar!
                </p>
            </div>
        </div>
    )
}

export default Apresentation