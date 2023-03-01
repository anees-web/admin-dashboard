

function ProductTable() {
    return (
      <>
                                     <div className="container">
                                          <div className="card m-3 ">
                                              <table className="table table-bordered ">
                                                  <thead>
                                                      <tr>
                                                          <th scope="col" className="text-center">
                                                      <input type="checkbox" className="form-check-input" />
                                                      </th>
                                                      <th scope="col">ID </th>
                                                      <th scope="col">Title</th>
                                                      <th scope="col">Quantity</th>
                                                      <th scope="col">Unit Price</th>
                                                      <th scope="col">Total</th>
                                                      <th scope="col">Action</th>
                                                      </tr>
                                                      </thead>
                                                      <tbody>
                                                          <tr>
                                                              <td colSpan="5" className="text-end text-success">
                                                                  <h2>Grand Total</h2>
                                                                  </td>
                                                                  <td colSpan="2" className="bg-success text-white rounded-pill text-center">
                                                                      <h2>Rs. 0</h2>
                                                                      </td>
                                                                      </tr>
                                                                      </tbody>
                                                                      </table>
                                                                      </div>
                                                                      </div>
  
  </>
    
    )}
  
    export default ProductTable;