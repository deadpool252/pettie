import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <span>|</span>
            <Link to="/map">Map</Link>
            <span>|</span>
            <Link to="/temp">Temp</Link>
        </div>
    )
}

export default Header