import "../page3.css";
import { Link } from "react-router-dom";
const Page3 = () => {
  return (
    <div className="page3">
      <Link to={"/Page2"}>
        <div className="back3">back</div>
      </Link>
      <h1 className="CYP3">Complete Your Profile!</h1>
      <p className="arbitrage3">
        For the purpose of industry regulation, your detauls are reqired
      </p>
      <p className="verify3">Bank verification number (BVN)</p>
      <input className="input13" type="text" placeholder="Please Verify" />
      <Link to={"/Page4"}>
        <button className="button3">Save & Continue</button>
      </Link>
      <div className="info3">Your info is safely secured</div>
      <div className="side3">STEP 03/03</div>
      <div className="ri3">Residency Info.</div>
    </div>
  );
};

export default Page3;
