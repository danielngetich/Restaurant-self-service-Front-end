import { Link } from "react-router-dom";
import "./TableNum.css"
function TableNum() {
  return (
    <div>
      <div>
        <h2 id="tbl">Select Your Table No</h2>
        <Link to="/customermenu">
          <button className="btn">Table 1</button>
        </Link>
        <Link to="/customermenu">
          <button className="btn">Table 2</button>
        </Link>
        <Link to="/customermenu">
          <button className="btn">Table 3</button>
        </Link>
        <Link to="/customermenu">
          <button className="btn">Table 4</button>
        </Link>
        <Link to="/customermenu">
          <button className="btn">Table 5</button>
        </Link>
        <Link to="/customermenu">
          <button className="btn">Table 6</button>
        </Link>
      </div>
    </div>
  );
}
export default TableNum;
