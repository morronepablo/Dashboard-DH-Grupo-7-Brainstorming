import React from 'react'
import ContentTop from '../contenttop/ContentTop'
import ContentAllProducts from './ContentAllProducts'
import ContentLastProduct from './ContentLastProduct'

function ContentCore () {
    return (
        <div className="content-wrapper">
            <ContentTop />
            <ContentLastProduct />
            <ContentAllProducts />
        </div>
    )
}

export default ContentCore