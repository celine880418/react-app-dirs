import { Link } from "react-router-dom";
import './Splash.css';

function Splash() {
  return (
    <div className="Splash flex-col">
      <Link to="/login" className="title-link">
        Footprint
      </Link>
      <span> <span className="ver"> </span></span>
    </div>
  );
}

export default Splash;
