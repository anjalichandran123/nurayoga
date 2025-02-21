import React from "react";

function Seventh() {
  return (
    <div className="container mt-5">
      <div className="bg-gray-100 p-8 rounded-xl">
      <div className="flex items-center justify-between">
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-7xl font-bold" style={{paddingRight:"900px"}}>What our client's say</h1>
      </div>
    </div>
    <hr></hr>
      <div className="row mt-5">
        {/* <!-- Card 1 --> */}
        <div className="col-sm-6 col-md-3 mb-4">
          <div className="card" style={{borderTopRightRadius: '100px'}}>
            <div className="card-body text-center">
              {/* <!-- Stars --> */}
              <div className="mb-3">
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
              </div>
              {/* <!-- Circular Image --> */}
              <div>
                <img
                  src="pic.jpg"
                  alt="Profile"
                  className="rounded-circle"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              {/* <!-- Card Title --> */}
              <h5 className="card-title mt-3">Special title treatment</h5>
              {/* <!-- Card Text --> */}
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="col-sm-6 col-md-3 mb-4">
          <div className="card" style={{borderTopRightRadius: '100px'}}>
            <div className="card-body text-center">
              {/* <!-- Stars --> */}
              <div className="mb-3">
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
              </div>
              {/* <!-- Circular Image --> */}
              <div>
                <img
                  src="pic.jpg"
                  alt="Profile"
                  className="rounded-circle"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              {/* <!-- Card Title --> */}
              <h5 className="card-title mt-3">Special title treatment</h5>
              {/* <!-- Card Text --> */}
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="col-sm-6 col-md-3 mb-4">
          <div className="card" style={{borderTopRightRadius: '100px'}}>
            <div className="card-body text-center">
              {/* <!-- Stars --> */}
              <div className="mb-3">
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
              </div>
              {/* <!-- Circular Image --> */}
              <div>
                <img
                  src="pic.jpg"
                  alt="Profile"
                  className="rounded-circle"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              {/* <!-- Card Title --> */}
              <h5 className="card-title mt-3">Special title treatment</h5>
              {/* <!-- Card Text --> */}
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="col-sm-6 col-md-3 mb-4">
          <div className="card" style={{borderTopRightRadius: '100px'}}>
            <div className="card-body text-center">
              {/* <!-- Stars --> */}
              <div className="mb-3">
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
                <span className="text-warning">★</span>
              </div>
              {/* <!-- Circular Image --> */}
              <div>
                <img
                  src="pic.jpg"
                  alt="Profile"
                  className="rounded-circle"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              {/* <!-- Card Title --> */}
              <h5 className="card-title mt-3">Special title treatment</h5>
              {/* <!-- Card Text --> */}
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seventh;
