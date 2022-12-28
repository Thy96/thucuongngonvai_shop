import React from 'react';
import Popup from "react-animated-popup";
import classnames from "classnames/bind";
import style from "./ProductDetail.module.scss";
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Input } from 'reactstrap';

const cx = classnames.bind(style);

function ProductDetail({ showPopupDetail, setShowPopupDetail, productDetail, addProductCart, selectSize, setSelectSize, selectOption, selectedSize }) {
    const { t } = useTranslation()
    const { size } = selectOption
    console.log(selectSize);
    return (
        <div className={cx('popup_detail', showPopupDetail ? "show_detail" : "")}>
            <Popup
                visible={showPopupDetail}
                animationDuration="500"
                onClose={() => setShowPopupDetail(false)}
            >
                <a onClick={() => setShowPopupDetail(!showPopupDetail)}>x</a>
                <div className={cx('flex-detail')}>
                    <figure><img src={productDetail.image} /></figure>
                    <section className={cx('detai-info')}>
                        <h3>{productDetail.name}</h3>
                        {/* <h4>Giá: {productDetail.price.toLocaleString()}đ</h4> */}
                        <Box sx={{ minWidth: 120 }} className='select_options'>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedSize}
                                    onChange={(e) => setSelectSize && setSelectSize(e.target.value)}
                                >
                                    {
                                        selectOption?.size.map((s, index) => (
                                            <MenuItem key={index} value={s.name}>Giá: {s.price}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                        <p>{productDetail.description}</p>
                        <Box sx={{ minWidth: 120 }} className='select_options'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedSize}
                                    label="Size"
                                    onChange={(e) => {
                                        setSelectSize && setSelectSize(e.target.value)
                                    }
                                    }
                                >
                                    {
                                        selectSize.map((s, index) => (
                                            <MenuItem key={index} value={s.name}>{s.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                        <Input type='number' placeholder='Amount' className='lg-6 mt-3' max={10} min={1} />
                        <button onClick={() => addProductCart(productDetail)} className="button-type-one btn-order-product">
                            {t('homepage.addCart')}
                        </button>
                    </section>
                </div>
            </Popup>
        </div>
    );
}

export default ProductDetail;