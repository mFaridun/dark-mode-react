import { useState } from "react";
import icon from "../../Constants/icon";
import '../Header/Header.css'


function Header () {

  const [dark, setDark] = useState(false);

const darkNot = () => {
  setDark(!dark);
}


  document.body.classList = dark ? "dark" : "light";
  return (

    <div>
      <header>
        <div className="container">
            <div className="header">

              <h2 className={`logo ${dark ? "dark" : "light"}`}> Logo</h2>

              <nav className="navbar">

                <ul className={`navbar__item ${dark ? "dark" : "light"}`}>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>

                <button onClick={darkNot}>
                  <icon.BsMoonFill />
                  <icon.BsSunFill />
                </button>

              </nav>

            </div>
          </div>
      </header>
    </div>

  )
}

export default Header;
