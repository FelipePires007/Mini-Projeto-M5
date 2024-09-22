import './header.css';
import img_api from '../../assets/codificacao.png';
const Header = () => {
    return (
        <header className="container_header">
            <div>
                <img src={img_api} alt="" />
                <h2>API server local</h2>
            </div>

            <nav>
                <ul>
                    [
                    <li>
                        <a target='b_blank' href="">Git Hub</a>
                    </li>
                    <li>
                        <a target='b_blank' href="">Linkedin</a>
                    </li>
                    <li>
                        <a target='b_blank' href="">Instagram</a>
                    </li>
                    ]
                </ul>
            </nav>
        </header>
    );
};

export { Header };