import React from 'react'
import './index.css'
import { FaPeopleGroup } from "react-icons/fa6";

function stats() {
  return (
    <div>
          {/* Statistics Section */}
          <div className="stats">
          {/* Upper Statistics */}
          <div className="upper-box flex justify-around gap-3">
            <div className="box">
              {" "}
              {/* Box 1 */}
              <FaPeopleGroup className="icons" />
              <p> CUSTOMERS </p>
              <h3> 7340 </h3>
            </div>
            <div className="box">
              {" "}
              {/* Box 2 */}
              <FaPeopleGroup className="icons" />
              <p> CUSTOMERS </p>
              <h3> 7340 </h3>
            </div>
            <div className="box">
              {" "}
              {/* Box 3 */}
              <FaPeopleGroup className="icons" />
              <p> CUSTOMERS </p>
              <h3> 7340 </h3>
            </div>
            <div className="box">
              {" "}
              {/* Box 4 */}
              <FaPeopleGroup className="icons" />
              <p> CUSTOMERS </p>
              <h3> 7340 </h3>
            </div>
          </div>

          {/* Lower Statistics */}
          <div className="flex gap-3 mt-6">
            <div className="box">
              {" "}
              {/* Box 5 */}
              <FaPeopleGroup className="icons" />
              <p> CUSTOMERS </p>
              <h3> 7340 </h3>
            </div>
            <div className="box">
              {" "}
              {/* Box 6 */}
              <FaPeopleGroup className="icons" />
              <p> CUSTOMERS </p>
              <h3> 7340 </h3>
            </div>
            <div className="box">
              {" "}
              {/* Box 7 */}
              <FaPeopleGroup className="icons" />
              <p> CUSTOMERS </p>
              <h3> 7340 </h3>
            </div>
            <div className="box">
              {" "}
              {/* Box 8 */}
              <FaPeopleGroup className="icons" />
              <p> CUSTOMERS </p>
              <h3> 7340 </h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default stats
