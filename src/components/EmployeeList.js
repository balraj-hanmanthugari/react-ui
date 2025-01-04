import React, { useState } from "react";

function EmployeeList() {
    const [state, setState] = useState([{
        name: 'ada',
        email: 'asd@as.com',
        mobile: '12213123'
    }, {
        name: 'adsaa',
        email: 'asadd@as.com',
        mobile: '126783'
    }]);

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Employee List
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            state?.map((emp) => {
                                return (
                                <tr>
                                    <td>{emp?.name}</td>
                                    <td>{emp?.email}</td>
                                    <td>{emp?.mobile}</td>
                                    <td ></td>
                                </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EmployeeList;