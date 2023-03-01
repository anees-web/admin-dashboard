function ColorSchemesExample() {
  return (
    <>
      <div className="container">
        <div className="card text-bg-info m-3 rounded-pill">
          <div className="card-body">
            <div className="row  align-items-center">
              <div className="col">
                <select className="form-select">
                  <option defaultValue=""></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </select>
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="productTitle"
                  disabled=""
                  placeholder="Product Title"
                  defaultValue=""
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  name="quantity"
                  min="1"
                  placeholder="quantity"
                  defaultValue="1"
                />
              </div>
              <div className="col">
                <input
                  className="form-control"
                  type="number"
                  name="unitPrice"
                  disabled=""
                  placeholder="unitPrice"
                  defaultValue=""
                />
              </div>
              <div className="col">
                <button className="btn btn-primary px-5" disabled="">
                  Add
                </button>
              </div>
              <div className="col">
                <button className="btn btn-warning px-5">Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorSchemesExample;
