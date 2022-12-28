import React, { useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload'

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useTranslation } from 'react-i18next';
import { images } from '../../../images';

const ProductListItem = ({ product, setProductDetail }) => {
    const { t } = useTranslation()

    return (
        <>
            <div className="list-product">
                {product && product.map((item) => (
                    <LazyLoad className="product-card" debounce={100} height={200} key={item.id} placeholder={<img src={images.loading} alt="loading" />}>
                        <>
                            <div className="img-wrap">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="product-card-content">
                                <div className="product-title">{item.name}</div>
                                <div className="product-price">
                                    <div className="product-origin-price">
                                        {item.price.toLocaleString()}đ
                                    </div>
                                </div>

                                <button onClick={() => setProductDetail(item)} className="button-type-one btn-order-product">
                                    Xem chi tiết
                                </button>
                            </div>
                        </>
                    </LazyLoad>
                ))}

                {/* {message} */}
            </div>
            <ToastContainer />
        </>

    )
}

export default ProductListItem