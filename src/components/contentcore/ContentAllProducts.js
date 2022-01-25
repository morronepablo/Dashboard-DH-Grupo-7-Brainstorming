import React, { useState, useEffect } from "react";
import Products from "./Products";

function ContentAllProducts () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products/all/")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
              setProducts(data.products)
          })
          .catch((error) => console.log(error));
    }, []);

    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-12 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">TODOS LOS PRODUCTOS</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    products.map((product,index)=>{
                                        return <Products title={product.title} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default ContentAllProducts