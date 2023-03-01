
function PaymentMethod() {
    return (
      <>
      <div className="container">    
      <div className="my-3">
        <div className="mt-2 ms-3">
            <div>
                <span className="me-3  ">Payment Method:</span>
                <span>
                    <input className="form-check-input me-1" type="radio" name="paymentMethod" id="cash" defaultChecked="" />
                        <label className="form-check-label " htmlFor="cash">Cash</label>
                        </span>
                        <span>
                            <input className="form-check-input me-1 ms-4" type="radio" name="paymentMethod" id="card" />
                            <label className="form-check-label" htmlFor="card">Card</label>
                            </span>
                            <span>
                                <input className="form-check-input me-1 ms-4" type="radio" name="paymentMethod" id="credit" />
                                <label className="form-check-label" htmlFor="credit">Credit</label>
                                </span>
                                </div>
                                </div>
                                </div>  
                               </div>
                               
      
      
      </>

);
}

export default PaymentMethod;