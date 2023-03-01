function Customers() {
    return (
      <>
<div className="container">      
      <div className="card m-3">
        <div className="row g-3 align-items-left m-2">
            <div className="col-2">
                <div>Customer Id:<select className="ms-3 py-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    </select>
                    </div>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="customername" className="form-label ms-2">Customer Name:</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="customername" className="form-control " />
                                </div>
                                <div className="col-auto ">
                                    <label htmlFor="mobileno" className="col-form-label ms-4 ">Mobile:</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="number" id="mobileno"className="form-control" />
                                            </div>
                                            <div className="col-auto">
                                                <button className="btn btn-primary">New Customer</button>
                                                </div>
                                                </div>
                                                </div>
      </div>
      
      </>
       )}
  
       export default Customers;