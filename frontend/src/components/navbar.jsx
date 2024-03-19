import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar fixed top-0 sticky z-[1] bg-neutral text-neutral-content">

            {/* website title */}
            <div className="flex-1">
                <a className="font-semibold px-5 text-xl">Wander Wallet</a>
            </div>

            {/* my trips button, leads to trips page */}
            <div className="flex-none px-5">
                <Link to="/">
                    <button className="btn btn-ghost">
                        <p>My Trips</p>
                    </button>
                </Link>
            </div>
            
        </div>
    )
}

export default Navbar;