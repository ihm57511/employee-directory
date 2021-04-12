import React, { Component } from 'react';
import API from '../../utils/API';
import Search from '../Search/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      searchedEmployees: [],
      direction: 0
    };
    this.sortTable = this.sortTable.bind(this);
  };

  componentDidMount() {
    this.searchEmployee();
  };

  searchEmployee = () => {
    API.search()
      .then(res => this.setState({ employees: res.data.results, searchedEmployees: res.data.results }))
      .catch(err => console.log(err))
  };

  handleSearch = event => {
    const value = event.target.value;
    const filterEmployees = this.state.employees.filter(employee => {
      let objValues = Object.values(employee.name).join('').toLowerCase();
      return objValues.indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({
      searchedEmployees: filterEmployees
    });
    console.log(filterEmployees)
  };

  sortTableByName = (key, dir) => {
    let emp = [...this.state.searchedEmployees];
    if (this.state.direction === 1) {
      emp.sort((a, b) => a.name[key] < b.name[key] ? -1 : 1);
    } else {
      emp.sort((a, b) => a.name[key] > b.name[key] ? -1 : 1);
    }
    this.setState({
      searchedEmployees: emp,
      direction: this.state.direction === 1 ? -1 : 1
    });
  };

  sortTable = (key, dir) => {
    let emp = [...this.state.searchedEmployees];
    if (this.state.direction === 1) {
      emp.sort((a, b) => a[key] < b[key] ? -1 : 1);
    } else {
      emp.sort((a, b) => a[key] > b[key] ? -1 : 1);
    }
    this.setState({
      searchedEmployees: emp,
      direction: this.state.direction === 1 ? -1 : 1
    });
  };

  sortTableByDOB = (key, dir) => {
    let emp = [...this.state.searchedEmployees];
    if (this.state.direction === 1) {
      emp.sort((a, b) => a.dob[key] < b.dob[key] ? -1 : 1);
    } else {
      emp.sort((a, b) => a.dob[key] > b.dob[key] ? -1 : 1);
    }
    this.setState({
      searchedEmployees: emp,
      direction: this.state.direction === 1 ? -1 : 1
    });
  };

  carrots = () => {
    if (this.state.direction === 0) {
      return
    }
    if (this.state.direction === 1) {
      return <FontAwesomeIcon style={{color: "tomato", fontSize: "1em"}} icon={faSortUp} />;
    } 
    return <FontAwesomeIcon style={{color: "tomato", fontSize: "1em"}} icon={faSortDown} />
  }

  render() {
    return (
      <>
        <Search
          handleSearch={this.handleSearch} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                Image
              </th>
              <th scope="col" style={{cursor: "pointer"}}
              onClick={() => this.sortTableByName('last')}>
                Name
                {this.carrots()}
              </th>
              <th scope="col" style={{cursor: "pointer"}}
              onClick={() => this.sortTable('phone')}>
                Phone
              </th>
              <th scope="col" style={{cursor: "pointer"}}
              onClick={() => this.sortTable('email')}>
                Email
              </th>
              <th scope="col" style={{cursor: "pointer"}}
              onClick={() => this.sortTableByDOB('age')}>
                DOB
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
                <td>{employee.dob.date.substring(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}

export default Table;

