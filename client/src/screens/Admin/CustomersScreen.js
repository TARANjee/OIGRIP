import React from 'react'

const CustomersScreen = () => {
  return (
    <div className='m-5'>
      <h3>Food Orders</h3>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Order No</th>
            <th scope="col">Delivery status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>123</td>
            <td>Pending</td>
            <td>13-12-2022</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>544</td>
            <td>Pending</td>
            <td>14-12-2022</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>845</td>
            <td>Pending</td>
            <td>12-12-2022</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Tj</td>
            <td>825</td>
            <td>Pending</td>
            <td>12-12-2022</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Hardeep</td>
            <td>155</td>
            <td>Pending</td>
            <td>12-12-2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CustomersScreen