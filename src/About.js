import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col s6 card-panel">
                <div className="name-section section">
                    <h3> Joshi Shushruth </h3>
                    <p> Developer, Wellington New Zealand </p>
                    <div>
                        This is my bio.
                    </div>
                </div>
            </div>
            <div className="col s6 profile-picture">
                <div className="card-panel ">
                    <div> yo </div>
                </div>
            </div>
        </div> 
      </div>
    );
  }
}

export default About;
