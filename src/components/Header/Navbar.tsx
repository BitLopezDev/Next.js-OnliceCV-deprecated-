import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/users/Santiago/imágenes/Logo/BasicRound.png';
import GitHub from '../../../public/assets/users/system/GitHub.svg';
import GitHubOrg from '../../../public/assets/users/system/Org.png';
import LinkedIn from '../../../public/assets/users/system/LinkedIn.svg';
// import './../../../../node_modules/bootstrap/dist/css/bootstrap.bundle.css';



const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-sm  fixed-top fondoantigradiente">

      <div className="container-fluid">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand" href="#">


            <Image src={Logo} alt="Avatar Logo" //style=//{`width:40px;`}
              className="rounded-pill avatar" width={40} />



          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#contentnavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="contentnavbar">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/BitLopezDev" target="_blank" rel="noreferrer">
                <Image
                  src={GitHub} height={35} alt="Mi GitHub" />
                {/* <Icon name='github' size='big' /> */}

              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/santiago-comesa%C3%B1a-l%C3%B3pez-464059258"
                target="_blank" rel="noreferrer">

                <Image src={LinkedIn} height={35} alt="Mi LinkedIn" />


              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/santiagocomesanalopez" target="_blank" rel="noreferrer"><Image
                src={GitHubOrg} height={35} alt="Mi GitHub de organización" /></a>
            </li>

          </ul>



        </div>
      </div>
    </nav>
  );
}

export default Navbar;