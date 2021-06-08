import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead style={{ backgroundColor: "#fcfcfc" }}>
      <tr>
        <th width="33%">Name</th>
        <th width="33%">Job</th>
        <th width="33%">Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const style = {
    textAlign: "center",
    fontSize: 18,
  };
  if (props.characterData.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan="3" style={style}>
            No user to show!
          </td>
        </tr>
      </tbody>
    );
  } else {
    let rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={() => props.removeCharacter(index)}>Remove</button>
          </td>
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
  }
};

const Table = (props) => {
  const { characterData, removeCharacter } = props;

  return (
    <table
      style={{
        border: "1px solid #ededed",
        boxShadow: "0 0 4px rgba(32, 32, 32, 0.05)",
      }}
    >
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Table;
