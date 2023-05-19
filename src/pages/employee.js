
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Employee (prop) {
  return (
    <div className="col-right-next">
        <div className="e-header">
          <img src={prop.employee.img} alt="Avatar" width="100"/>
          <div className="e-name-title">
            <h4>{prop.employee.name}</h4>
            <p>{prop.employee.title}</p>
          </div>
        </div>
        <div className="col2">
          <h5>Call Office</h5>
          <p>555-555-5555</p>
        </div>
        <div className="col2">
          <h5>Call Mobile</h5>
          <p>555-555-5555</p>
        </div>
        <div className="col2">
          <h5>SMS</h5>
          <p>555-555-5555</p>
        </div>
        <div className="col2">
          <h5>Email</h5>
          <p>email@email.com</p>
        </div>

      </div>
  )
}