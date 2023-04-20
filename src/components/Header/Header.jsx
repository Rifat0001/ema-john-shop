import logo from '../../assets/images/Logo.svg';
import './Header.css';
const Header = () => {
    return (

        <div className='header'>
            <div className='img'>
                <img src={logo} alt="" />
            </div>
            <div className='menu'>
                <a href="/home">home</a>
                <a href="/about">about</a>
                <a href="/shop">shop</a>
                <a href="/contact">contact</a>
            </div>
        </div>
    );
};

export default Header;