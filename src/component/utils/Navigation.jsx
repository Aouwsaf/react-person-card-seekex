
export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-body-tertiary py-0 sticky-top">
            <div className="container-fluid container-lg">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item mx-2">
                            <a className="nav-link py-lg-0 py-2 px-2 my-lg-3 mx-lg-4 text-uppercase active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link py-lg-0 py-2 px-2 my-lg-3 mx-lg-4 text-uppercase" href="#">Shop</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link py-lg-0 py-2 px-2 my-lg-3 mx-lg-4 text-uppercase" href="#">FAQ</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link py-lg-0 py-2 px-2 my-lg-3 mx-lg-4 text-uppercase" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link py-lg-0 py-2 px-2 my-lg-3 mx-lg-4 text-uppercase" href="#">Fashion Advice</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex flex-grow-1 d-lg-block flex-lg-grow-0">
                    <ul className="navbar-nav flex-row ms-auto ms-lg-0">
                        <li className="nav-item mx-1">
                            <a className="nav-link py-lg-0 py-2 px-2 my-lg-3" aria-current="page" href="#"><i className="fa fa-heart-circle-plus"></i></a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link py-lg-0 py-2 px-2 my-lg-3" href="#"><i className="fa fa-cart-shopping"></i></a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link py-lg-0 py-2 px-2 my-lg-3" href="#"><i className="fa fa-user-alt"></i></a>
                        </li>
                        <span className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </span>
                        <li className="nav-item mx-1">
                            <a className="nav-link p-0"><span className="btn btn-primary rounded-0"><i className="fa fa-search"></i></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
