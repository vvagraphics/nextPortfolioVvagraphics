import React from 'react';
import Link from 'next/link';

function Navigation() {
return (
<div className="nav" id="nav-home">
    {/* <div className="container d-flex justify-content-end align-items-center position-absolute " style={{top: 0, right:
        0}}>
        <div className="row">
            <div className="col-8 col-md-7 col-lg-4 mx-auto">
                <div>
                    <h2 className="text-center pt-1" style={{color: "#02FF9B" , fontSize: "3vh" , width: "40vw" ,
                        maxWidth: "100%" }}>
                        LOGIN
                    </h2>
                </div>
                <form action="/" className="form-signin" method="POST">
                    <div className="input-group mb-3">
                        //////USERNAME//////
                        <label htmlFor="username"></label>
                        //////INPUT//////
                        <input type="text" className="form-control form-username" id="username" placeholder="Username"
                            name="uname" required />

                        <span className="p-3"></span>
                        //////PASSWORD//////
                        <label htmlFor="password"></label>
                        //////INPUT//////
                        <input type="password" className="form-control form-password" id="password"
                            placeholder="Password" name="pword" required />
                    </div>
                    //////LOGIN AND SIGNUP//////
                    <button type="submit" className="btn" style={{backgroundColor: "#cc80ff" }}>Login</button>
                    <button type="button" className="btn cancelbtn" style={{backgroundColor: "#FF9B02"
                        }}>SignUp</button>
                    <p className="text-right" style={{color: "#00CE7D" }}>Forgot <a style={{color: "#02FF9B" }}
                            href="#">password?</a></p>
                </form>
            </div>
        </div>
    </div> */}


    <h1>VVAGRAPHICS</h1>
    {/* < className="nav-tab" href="#tab-home"> */}

    <h3 className="spanloader">
        <span className="m">S</span>
        <span className="m">T</span>
        <span className="m">E</span>
        <span className="m">F</span>
        <span className="m">A</span>
        <span className="m">N</span>
        <span className="m">&apos;</span>
        <span className="m">S</span>
        <span className="m">&nbsp;</span>
        <span className="m">P</span>
        <span className="m">O</span>
        <span className="m">R</span>
        <span className="m">T</span>
        <span className="m">F</span>
        <span className="m">O</span>
        <span className="m">L</span>
        <span className="m">I</span>
        <span className="m">O</span>
    </h3>

    <section id="products"></section>

    <div className="nav-container">
        <a className="nav-tab" href="#tab-print">PRINT</a>
        <a className="nav-tab" href="#tab-digital">DIGITAL</a>
        <a className="nav-tab" href="#tab-branding">BRANDING</a>
        <a className="nav-tab" href="#tab-uiux">UI/UX</a>
        <a className="nav-tab" href="#tab-motion">MOTION</a>
    </div>
</div>
);
}

export default Navigation;