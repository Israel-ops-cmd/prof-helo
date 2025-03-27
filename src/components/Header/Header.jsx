import { motion } from "framer-motion";
import HeloImg from './../../assets/helo.png';
import './Header.css';

function Header() {
    return (
        <header className="primary">
            <motion.div 
                className="d-flex-row j-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div 
                    id="copy" 
                    className="d-flex-column"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1>Apoio Escolar Personalizado para o Sucesso do Seu Filho!</h1>
                    <h3>Aulas particulares para reforço escolar e desenvolvimento das habilidades do seu filho.</h3>
                    <motion.button 
                        className='cta-button'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a 
                            href="https://wa.me/558491814786?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20e%20conhecer%20mais%20sobre%20o%20seu%20trabalho.%20:)"
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            Agende sua aula agora!
                        </a>
                    </motion.button>
                </motion.div>

                <motion.img 
                    src={HeloImg} 
                    alt="error" 
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                />
            </motion.div>
        </header>
    );
}

export default Header;
