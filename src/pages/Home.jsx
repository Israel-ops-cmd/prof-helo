import { motion } from "framer-motion";
import Header from './../components/Header/Header';
import Benefits from './../components/Benefits/Benefits';
import Depoiments from './../components/Depoiments/Depoiments';
import Action from './../components/Action/Action';
import Metodologia from './../components/Metodologia/Metodologia';
import Garantia from './../components/Garantia/Garantia';
import Apresentation from './../components/Apresentation/Apresentation';
import Footer from './../components/Footer/Footer';

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
        >
            <Header />
            <Benefits />
            <Depoiments />
            <Action />
            <Metodologia />
            <Garantia />
            <Apresentation />
            <Footer />
        </motion.div>
    );
}

export default Home;
