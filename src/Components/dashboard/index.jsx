// Importing required modules and styles
import React from "react";
import "./index.css";
import Graph from './graph'
import Stats from './stats'
import Ranking from './ranking'
import Order from './order'
import { Link } from "react-router-dom";

// Dashboard component
function Dashboard() {
  return (
    <section className="w-[90%]">
      {/**************************  Buttons  **********************/}
      <div className="flex justify-between">
        <button className="btn-left">Filter By</button> {/* Filter Button */}
        <Link to="/tqm"> <button className="btn-right">TQM</button> </Link> {/* TQM button */}
      </div>
      {/************************** Boxes & Graph *****************************/}
      <div className="flex justify-between mt-[25px]">
        <Stats />
        <div>
          <Graph />
        </div>
      </div>
      <Ranking/>
      <Order />
    </section>
  );
}

export default Dashboard;
