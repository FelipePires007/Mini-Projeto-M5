import { Footer } from "../components/footer/footer.jsx";
import { Header } from "../components/header/header.jsx";
import { MAIN_API } from "./components/main.api.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <MAIN_API />
            <Footer />
        </>
    );
};

export { Home };