import Titulo from "./Titulo";
import Paginas from "./Paginas";

function Navbar() {
    
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
             <div className="container-fluid">

                <Titulo/>
                <Paginas/>

             </div>
        </nav>
    )

}

export default Navbar;