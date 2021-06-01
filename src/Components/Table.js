import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th>
        </thead>
        <tbody>
          <tr>
            <td>Muhsin</td>
            <td>Programmer</td>
            <td>
              <button>Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
