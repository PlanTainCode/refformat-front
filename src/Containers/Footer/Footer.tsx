import { FC } from "react";
import './footer.scss';

// @ts-ignore
import logo from '../../Assets/logo-white.png';

interface IFooterProps {

}

const Footer:FC<IFooterProps> = () => {

    return (
        <footer>
            <img src={logo} alt="logo white" />
        </footer>
    )
}

export default Footer;
