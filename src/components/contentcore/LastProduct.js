import React from 'react'

function LastProduct ({ dataProduct, dataImage }) {

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Detalle de último producto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={`http://localhost:4000/img/products/${dataImage}`} />
                    </div>
                    <hr />
                    <h6>{dataProduct.title}</h6>
                </div>
            </div>
        </div>
    )
}

export default LastProduct