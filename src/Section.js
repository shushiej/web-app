import React, { Component } from 'react';
import './Header.css';

class Section extends Component {
  render() {
    return (
    <div>
        <div className="section">
            <h5>Section 1</h5>
                <p>Stuff</p>
        </div>
        <div class="divider"></div>
    </div>
    );
  }
}

export default Section;
