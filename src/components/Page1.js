import "../page1.css";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
const Page1 = () => {
  return (
    <div className="page1">
      <Link to={"/"}>
        <div className="back1">back</div>
      </Link>
      <h1 className="ria1">Register Individual Account!</h1>
      <p className="arbitrage1">
        For the purpose of industry regulation, your detauls are reqired
      </p>
      <p className="name1">Your fullname*</p>
      <input className="input11" type="text" placeholder="Enter name" />
      <p className="email1">Email address*</p>
      <input
        className="input21"
        type="text"
        placeholder="Enter email address"
      />
      <p className="password1">Create password*</p>
      <input className="input31" type="text" placeholder="Enter password" />
      <div className="terms1">
        <input type="checkbox" className="inputcheck" />
        <div>I agree to the terms and conditions</div>
      </div>
      <Link to={"/Page2"}>
        <button className="button1">Save & Continue</button>
      </Link>
      <div className="divider1">OR</div>
      <button className="google1">
        <GoogleIcon />
        <div className="text111">Register with Google</div>
      </button>

      <div className="side1">STEP 01/03</div>
      <div className="ri1">Personal Info.</div>
    </div>
  );
};

export default Page1;
