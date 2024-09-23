import './header.css';
import img_api from '../../assets/pilha-de-livros.png';
const Header = () => {
    return (
        <header className="container_header">
            <div>
                <img src={img_api} alt="" />
                <h2>Livro Antirracismo</h2>
            </div>

            <nav>
                <ul>
                    [
                    <li>
                        <a target='b_blank' href="https://github.com/FelipePires007">Git Hub</a>
                    </li>
                    <li>
                        <a target='b_blank' href="https://www.linkedin.com/in/felipe-pires-9bbb45302/">Linkedin</a>
                    </li>
                    <li>
                        <a target='b_blank' href="https://www.instagram.com/felipex.one/">Instagram</a>
                    </li>
                    ]
                </ul>
            </nav>
        </header>
    );
};

export { Header };