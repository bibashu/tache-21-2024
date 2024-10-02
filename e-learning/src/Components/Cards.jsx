import React from 'react'

const Cards = () => {
  return (
    <div className="container shadow">
    <div className="page-inner">
      {/* <!-- Card --> */}
      <h3 className="fw-bold mb-3">ACTIVITES</h3>
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-primary card-round">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center">
                    <i className="fas fa-users"></i>
                  </div>
                </div>
                <div className="col-7 col-stats">
                  <div className="numbers">
                    <p className="card-category">Livraisons acceptées</p>
                    <h4 className="card-title">1,294</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-info card-round">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center">
                    <i className="fas fa-user-check"></i>
                  </div>
                </div>
                <div className="col-7 col-stats">
                  <div className="numbers">
                    <p className="card-category">Livraisons rejetes</p>
                    <h4 className="card-title">1303</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-success card-round">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center">
                    <i className="fas fa-chart-pie"></i>
                  </div>
                </div>
                <div className="col-7 col-stats">
                  <div className="numbers">
                    <p className="card-category">Nombres de cours inscrits </p>
                    <h4 className="card-title">$ 1,345</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-secondary card-round">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center">
                    <i className="far fa-check-circle"></i>
                  </div>
                </div>
                <div className="col-7 col-stats">
                  <div className="numbers">
                    <p className="card-category"> projets Terminés</p>
                    <h4 className="card-title">576</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
     
     



    </div>
  </div>

  )
}

export default Cards
