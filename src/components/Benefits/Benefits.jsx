import './Benefits.css'

function Benefits () {
    return (
        <div className="sections">
            <h1 className="t-align benefits-h1">Por que escolher nossas aulas?</h1>
            <div id="lyst">
                <ul className='d-flex-row'>
                    <li>
                        <h3>Aulas personalizadas</h3>
                        <p>Aulas adaptadas às necessidades e ritmo de cada aluno.</p>
                    </li>
                    <li>
                        <h3>Resultados visíveis</h3>
                        <p>Melhoria no desempenho escolar em pouco tempo</p>
                    </li>
                    <li>
                        <h3>Flexibilidade de horários</h3>
                        <p>Escolha o horário que melhor se adapta à sua agenda</p>
                    </li>
                    <li>
                        <h3>Acompanhamento individual</h3>
                        <p>Receba orientação individual para maximizar o aprendizado.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Benefits