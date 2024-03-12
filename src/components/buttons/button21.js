

import React, { Component } from "react";

class Members extends Component {
  constructor() {
    super();
    this.state = {
      filteredDevelopers: [],
      developers: [
        { "name": "hema", "subject": "javascript" },
        { "name": "shirisha", "subject": "react" },
        { "name": "shreya", "subject": "nodejs" },
        { "name": "prasanna", "subject": "javascript" },
        { "name": "rasagana", "subject": "react" },
        { "name": "sai", "subject": "nodejs" },
        { "name": "dheeraj", "subject": "javascript" }
      ]
    };
  }

  handleButtonClick = (subject) => {
    let result1 = this.state.developers.filter(
      eachdeveloper => eachdeveloper.subject === subject
    );
    this.setState({ filteredDevelopers: result1 });
  };

  handleButtonClick1 = (subject) => {
    let result2 = this.state.developers.filter(
      eachdeveloper => eachdeveloper.subject === subject
    );
    this.setState({ filteredDevelopers: result2 });
  };

  handleButtonClick2 = (subject) => {
    let result3 = this.state.developers.filter(
      eachdeveloper => eachdeveloper.subject === subject
    );
    this.setState({ filteredDevelopers: result3 });
  };

  handleButtonClick3 = (subject) => {
    if (subject === "ALL") {
      // Display all developers
      this.setState({
        filteredDevelopers: []
      });
    } else {
      // Filter developers based on subject
      let result1 = this.state.developers.filter(eachdeveloper => eachdeveloper.subject === subject);
      this.setState({
        filteredDevelopers: result1
      });
    }
  };

  render() {
    const buttonStyle = {
      padding: "10px", margin: "2px", borderRadius: "10px", backgroundColor: "crimson"
    };

    return (
      <div style={{ margin: "180px", padding: "10px" }}>
        <button style={buttonStyle} onClick={() => this.handleButtonClick1("javascript")}>javascript</button>
        <button style={buttonStyle} onClick={() => this.handleButtonClick("react")}>react</button>
        <button style={buttonStyle} onClick={() => this.handleButtonClick2("nodejs")}>nodejs</button>

        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>subject</th>
              </tr>
            </thead>
            <tbody>
              {this.state.filteredDevelopers.length > 0 ? (
                this.state.filteredDevelopers.map((eachdeveloper, index) => (
                  <tr key={index}>
                    <td>{eachdeveloper.name}</td>
                    <td>{eachdeveloper.subject}</td>
                  </tr>
                ))
              ) : (
                this.state.developers.map((eachdeveloper, index) => (
                  <tr key={index}>
                    <td>{eachdeveloper.name}</td>
                    <td>{eachdeveloper.subject}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Members;
