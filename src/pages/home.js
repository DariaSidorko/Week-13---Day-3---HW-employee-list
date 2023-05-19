
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Employee from './employee'


export default function Home () {

  const data = [
    {
      img: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp',
      name: 'Paul Doe',
      title: 'Manager'
    },
    {
      img: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp',
      name: 'John Doe',
      title: 'Accountant'
    },
    {
      img: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp',
      name: 'Derick Doe',
      title: 'Web Developer'
    },
    {
      img: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp',
      name: 'Tom Doe',
      title: 'Vice President'
    },
    {
      img: 'https://mdbcdn.b-cdn.net/img/new/avatars/1.webp',
      name: 'Alex Doe',
      title: 'Technitian'
    }
  ]

  const [currentEmployee, setCurrentEmployee] = useState(null)

//onChange={setCurrentEmployee(employee)}
  return (
    <div className="main">
      
      <div className="col-left">
        <h3>Employee Directory</h3>
        <div className="search-bar">
          <input type="text" placeholder="Search.."/>
        </div>
        <div className="all-employees">

        { data.map((employee, i) => {
          return (
            <div  className="e-header-small">
              <img src={employee.img} alt="Avatar" width="50"/>
              <div className="e-name-title-small">
                <h4>{employee.name}</h4>
                <p>{employee.title}</p>
              </div>
              <button onClick={(e) => {
                setCurrentEmployee(employee)} }type="employee-details"  > &#62; </button>
            </div>
          )
          })
        }

        </div>
      </div>
    <div className="col-right">
        <h3>Employee</h3>
      {
        currentEmployee ?
        <Employee employee = {currentEmployee} />
        :
        <div></div>
      }
      </div>
        
    </div>
  )
}