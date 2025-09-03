import Rasm from './assets/logo.svg'

function Nav() {
   return(
     <nav>
        <img src={Rasm} alt="" />

        <div className="teg">
            <a href="">home</a>
            <a href="">Destinations</a>
            <a href="">About</a>
            <a href="">Partner</a>
            <button className='ton'>Login</button>
            <button>Register</button>
        </div>
      
    </nav>
   )
}

export default Nav;