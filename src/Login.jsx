import React from "react";
import "./Login.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main">
      <div className="maincontainer">
        <div className="heading">
          <img
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJd82jZdXs8Uj9CX3mJFuRF27MZB7q_34xAg&s"
            alt="Netflix Logo"
          />
        </div>
        <div className="background">
          <img
            className="imageb"
            src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
            alt="Background"
          />
          <div className="mainbox">
            <div className="subheading">Sign In</div>

            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                className="formcontrolemail"
                type="email"
                placeholder="name@example.com"
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                className="formcontrolemail"
                type="password"
                placeholder="Password"
              />
            </FloatingLabel>
            <Link to="/Home">
              <div className="Signinbuttton">
                <Button variant="danger">Sign In</Button>{" "}
              </div>
            </Link>
            <div className="rememberneed">
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3 rememberme">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={`Remember me`}
                  />
                </div>
              ))}
              <div className="needhelp">
                <Button className="help" variant="link">
                  help?
                </Button>
              </div>
            </div>

            <div className="newtonetflix">
              New to Netflix?
              <Button className="signupnow" variant="link">
                Sign Up Now
              </Button>
            </div>
            <div className="captcha">
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.{" "}
              <Button className="Learnmore" variant="link">
                Learnmore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
