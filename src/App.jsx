import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="Nav">
        <div className="navlogo">
          <img
            className="navlogoimage"
            src="data:image/png;base64,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"
          />
        </div>
        <div className="navsigninimage">
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <Button className="signinimage" variant="danger">
              Sign in
            </Button>{" "}
          </Link>
        </div>
      </div>
      <div className="firstbackgroundimage">
        <img
          className="firstbackgroundimagepicture"
          src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
        />
        <div className="mainheading">
          <div className="mainheadingadjust">
            Unlimited movies, Tv shows and more
          </div>
          <div className="subheadingadjust">
            {" "}
            Watch anywhere. Cancel anytime
          </div>

          <Link to="/Home">
            <Button className="headingbutton" variant="danger">
              Get Started
            </Button>{" "}
          </Link>
        </div>
      </div>
      <div className="enjoyontv">
        <div className="enjoyontvdetails">
          <div className="enjoyonyourtvadjust">
            <div className="enjoyonyourtv">Enjoy on your TV</div>
          </div>
          <div className="watchontvchrome">
            <p>Watch on Smart TVs,Playstations,Xbox,Chromecast,</p>
            <p>Apple TV,Blue-Ray players and more.</p>
          </div>
        </div>

        <div className="enjoyontvdetails">
          <img
            className="enjoyontvdetailsimage"
            src="https://thumbs.dreamstime.com/b/netflix-app-tv-screen-playing-lucifer-series-logo-behind-netflix-app-tv-screen-playing-lucifer-series-logo-173595443.jpg"
          />
        </div>
      </div>

      <div className="enjoyontv">
        <div className="enjoyontvdetails">
          <img
            className="enjoyontvdetailsimage"
            src="https://s.yimg.com/ny/api/res/1.2/puQ7AgwPrTCkpKqylUACjA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/variety.com/758d4717ecb37b9abfc6a9c985075cba"
          />
        </div>

        <div className="enjoyontvdetails">
          <div className="enjoyonyourtvadjust">
            <div className="enjoyonyourtv">Download your shows</div>
          </div>
          <div className="watchontvchrome">
            <p>Save your any favourites fastly,easily and always have</p>
            <p>something to watch</p>
          </div>
        </div>
      </div>

      <div className="enjoyontv">
        <div className="enjoyontvdetails">
          <div className="enjoyonyourtvadjust">
            <div className="enjoyonyourtv">Watch everywhere</div>
          </div>
          <div className="watchontvchrome">
            <p>Stream unlimited movies and TV shows on your any</p>
            <p>phone,tablet,laptop,and TV.</p>
          </div>
        </div>

        <div className="enjoyontvdetails">
          <img
            className="enjoyontvdetailsimage"
            src="https://assets.mspimages.in/gear/wp-content/uploads/2022/08/netflix-3.jpg?tr=h-300,t-true"
          />
        </div>
      </div>

      <div className="enjoyontv">
        <div className="enjoyontvdetails">
          <img
            className="enjoyontvdetailsimage"
            src="https://images.ctfassets.net/4cd45et68cgf/6iXnjVYXdbXd8RTRZLVLmG/c5ba999638cd648e34b653a58f2fa74e/image1.jpg?w=2000"
          />
        </div>

        <div className="enjoyontvdetails">
          <div className="enjoyonyourtvadjust">
            <div className="enjoyonyourtv">Profiles for kids</div>
          </div>
          <div className="watchontvchrome">
            <p>Send children on adventures with their favourites in a</p>
            <p>spce made just for them-free membership</p>
          </div>
        </div>
      </div>
      <div className="questionsbox">
        <div className="questionsheading">Frequently Asked Questions</div>
        <div className="questiondetailbox">
          <div className="questionone">What is Netflix?</div>
          <div className="questiontwo">+</div>
        </div>
        <div className="questiondetailbox">
          <div className="questionone">How much does Netflix cost?</div>
          <div className="questiontwo">+</div>
        </div>

        <div className="questiondetailbox">
          <div className="questionone">Where can i watch?</div>
          <div className="questiontwo">+</div>
        </div>
        <div className="questiondetailbox">
          <div className="questionone">How do i cancel?</div>
          <div className="questiontwo">+</div>
        </div>
        <div className="questiondetailbox">
          <div className="questionone">What can i watch on Netflix?</div>
          <div className="questiontwo">+</div>
        </div>
        <div className="questiondetailbox">
          <div className="questionone">Is Netflix goog for kids?</div>
          <div className="questiontwo">+</div>
        </div>
        <Link to="/Home" style={{ textDecoration: "none" }}>
          <div className="getstartedbutton">
            <Button className="signinimage" variant="danger">
              Get Started
            </Button>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default App;
