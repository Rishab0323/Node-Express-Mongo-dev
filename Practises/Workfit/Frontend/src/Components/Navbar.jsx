import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div class='container'>
            <Link to="/">
            <h1>Workout Buddy</h1>
            </Link>
        </div>
    )
}

export default Navbar;