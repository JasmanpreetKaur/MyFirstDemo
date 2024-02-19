const UserNaveBar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="/user_navbar">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/main">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/city">Manage_City</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sign_up">Manage_User</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/c_password">Change_Password</a>
                        </li>

                    </ul>
                </div>

                <button className="btn btn-outline-success m-5 my-sm-0" type="submit">Log_Out</button>

            </nav>
        </>
    )
}
export default UserNaveBar