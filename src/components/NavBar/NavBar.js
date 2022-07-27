// UpperCamelCase
//import './NavBar.scss'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
  
        <div className='navbar-primary'>
            <img src="/assets/logo.svg" alt="logo adidas" />
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>About Us</button></li>
                <li><button>Contacto</button></li>
            </ul>

            


        











            <CartWidget />
        </div>

        
    )
}

export default NavBar