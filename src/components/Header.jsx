import logo from '../assets/logo.svg'
import Button from '@mui/material/Button'
function Header() {
    return (
        <>
            <div className="header-container">
                <img id='logo-header' src={logo} alt="logo" />
            </div>
        </>
    )
}

export default Header