import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { MAIN_API } from "./components/main.api";

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