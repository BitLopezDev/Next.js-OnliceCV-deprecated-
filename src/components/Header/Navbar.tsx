import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/assets/users/Santiago/imágenes/Web/circle.png';
import GitHub from '../../../public/assets/users/system/GitHub.svg';
import GitHubOrg from '../../../public/assets/users/system/Org.png';
import LinkedIn from '../../../public/assets/users/system/LinkedIn.svg';
// import './../../../../node_modules/bootstrap/dist/css/bootstrap.bundle.css';
import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'
const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-sm  fixed-top fondoantigradiente">

      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src={Logo} alt="Avatar Logo" //style=//{`width:40px;`}
            className="rounded-pill avatar" width={40} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#contentnavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="contentnavbar">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/TheBitlopez" target="_blank"><Image
                src={GitHub} height={35} alt="Mi GitHub" /></a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/santiago-comesa%C3%B1a-l%C3%B3pez-464059258"
                target="_blank"><Image src={LinkedIn} height={35} alt="Mi LinkedIn" /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/santiagocomesanalopez" target="_blank"><Image
                src={GitHubOrg} height={35} alt="Mi GitHub de organización" /></a>
            </li>

          </ul>



        </div>
      </div>
    </nav>
  );
}

export default Navbar;