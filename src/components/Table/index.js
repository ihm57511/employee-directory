import React from 'react';
import employees from '../../employees.json';

const Table = () => {
  return(
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
    {employees.map(employee => (
    <tr>
      <td>{<img height="60" src={employee.image} alt={employee.name} />}</td>
      <td>{employee.name}</td>
      <td>{employee.phone}</td>
      <td>{employee.email}</td>
      <td>{employee.dob}</td>
    </tr>
    ))}
  </tbody>
</table>
  )
}

export default Table;