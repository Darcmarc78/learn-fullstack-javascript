import React from 'react';
import Table from 'react-bootstrap/Table';

const ContestPreview  = (contest) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Category Name</th>
        <th>Contest Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{contest.id}</td>
        <td>{contest.categoryName}</td>
        <td>{contest.contestName}</td>
      </tr>
    </tbody>
  </Table>
);

export default ContestPreview;