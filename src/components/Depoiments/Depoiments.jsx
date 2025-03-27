import { useState } from "react";
import { motion } from "framer-motion";
import "./Depoiments.css";

function Depoiments() {
    const testimonials = [
        { texto: "Ótima professora! Meu filho melhorou muito na escola.", pessoa: "Ana Souza" },
        { texto: "A tia Helô realmente ajudou a minha filha a aprender.", pessoa: "Eliete Bezerra" },
        { texto: "Explicações claras e paciência, recomendo muito!", pessoa: "Ricardo Lima" },
        { texto: "Meu filho passou de ano com a ajuda dela, gratidão!", pessoa: "Fernanda Costa" },
        { texto: "Além de ser uma menina super gentil, é uma ótima profissional!", pessoa: "Lindalva Araújo" }
    ];

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextTestimonial = () => {
        setDirection(-1);
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(1);
        setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="primary">
            <h1 className="t-align">O que dizem sobre as nossas aulas?</h1>
            <div className="testemunhos-container">
                <div className="nav-buttons">
                    <button onClick={prevTestimonial}>❮</button>
                </div>
                <motion.div
                    className="testemunhos"
                    key={index}
                    initial={{ opacity: 0, x: direction * 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <p>"{testimonials[index].texto}"</p>
                    <h4>{testimonials[index].pessoa}</h4>
                </motion.div>
                <div className="nav-buttons">
                    <button onClick={nextTestimonial}>❯</button>
                </div>
            </div>
        </div>
    );
}

export default Depoiments;
