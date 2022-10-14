import "../page11.css";
import { Link } from "react-router-dom";
const Page2 = () => {
  return (
    <div className="page2">
      <Link to={"/Page1"}>
        <div className="back2">back</div>
      </Link>
      <h1 className="CYP2">Complete Your Profile!</h1>
      <p className="arbitrage2">
        For the purpose of industry regulation, your detauls are reqired
      </p>
      <p className="phoneNumber2">Phone number</p>
      <input
        className="input12"
        type="text"
        placeholder="Please enter the phone number"
      />
      <p className="address2">Your address</p>
      <input
        className="input22"
        type="text"
        placeholder="Please enter address"
      />
      <p className="country2">Country of residence</p>
      <input className="input32" type="text" placeholder="Please select" />
      <Link to={"/Page3"}>
        <button className="button2">Save & Continue</button>
      </Link>
      <div className="safe2">Your info is safely secured</div>
      <div className="side2">STEP 02/03</div>
      <div className="ri2">Residency Info.</div>
    </div>
  );
};

export default Page2;
