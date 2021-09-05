import React from "react";
import Footer from "../../components/Footer/footer.component";
import "./result.styles.css";

export default function Result() {
  return (
    <div className="main">
      <div className="result-content">
        <h1>Result</h1>
        <div className="content">
          <div class="card">
            <h2>Quiz-o-quest</h2>
            <h3>In round 1:</h3>
            <h4>Your rank is 56 and Score is 21</h4>
            <h3>In round 2:</h3>
            <h4>Your rank is 56 and Score is 21</h4>
            <h3>In round 3:</h3>
            <h4>Your rank is 56 and Score is 21</h4>
          </div>
          <div class="card">
            <h2>D2D</h2>
            <h3>In round 1:</h3>
            <h4>Your rank is 56 and Score is 21</h4>
            <h3>In round 2:</h3>
            <h4>Your rank is 56 and Score is 21</h4>
          </div>
          <div class="card">
            <h2>Kasparable</h2>
            <h4>Your rank is 56 and Score is 21</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
