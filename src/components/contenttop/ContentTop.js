import React from 'react'
import SmallCard from './SmallCard'

let productsTotal = {
    color:   "primary",
    titulo: "Total de productos",
    valor: 21,
    icono: "fas fa-boxes",
}

let categoriesTotal ={
    color:   "success",
    titulo: "Total de categorias",
    valor: 79,
    icono: "fas fa-book-open",
}

let usersTotal = {
    color:   "warning",
    titulo: "Total de usuarios",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productsTotal,categoriesTotal,usersTotal];

function ContentTop () {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div className="row">
                {
                    cardProps.map((producto,index)=>{
                        return <SmallCard  {...producto}  key= {index}/>
                    })
                }
            </div>
        </div>
    )
}

export default ContentTop