import React, {Component} from 'react';
import API from '../../utils/API';

class Table extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.searchEmployee();
  };

  searchEmployee = () => {
    API.search()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err))
  }

  render() {
    return (
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
          {this.state.employees.map(employee => (
            <tr>
              <td>{<img src={employee.picture.thumbnail} alt={employee.name} />}</td>
              <td>{employee.name.first} {employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Table;