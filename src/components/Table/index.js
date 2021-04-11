import React, { Component } from 'react';
import API from '../../utils/API';
import Search from '../Search/index';

class Table extends Component {
  state = {
    employees: [],
    searchedEmployees: []
  };
  
  componentDidMount() {
    this.searchEmployee();
  };

  searchEmployee = () => {
    API.search()
      .then(res => this.setState({ employees: res.data.results, searchedEmployees: res.data.results }))
      .catch(err => console.log(err))
  }

  handleSearch = event => {
    const value = event.target.value;
    const filterEmployees = this.state.employees.filter(employee => {
      let objValues = Object.values(employee).join('').toLowerCase();
      return objValues.indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({
      searchedEmployees: filterEmployees
    });
    console.log(filterEmployees)
    console.log(this.state.searchedEmployees)
    console.log(this.state.employees)
  }

  render() {
    return (
      <>
        <Search
        handleSearch={this.handleSearch}/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                <button type="button">Image</button>
              </th>
              <th scope="col">
                <button type="button">Name</button>
              </th>
              <th scope="col">
                <button type="button">Phone</button>
              </th>
              <th scope="col">
              <button type="button">Email</button>
              </th>
              <th scope="col">
              <button type="button">DOB</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.searchedEmployees.map(employee => (
              <tr key={employee.email}>
                <td>{<img src={employee.picture.thumbnail} alt={employee.name} />}</td>
                <td>{employee.name.first} {employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}

export default Table;