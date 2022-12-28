import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProduct } from '../../redux/actions/productAction';
import { getAllSelectOption } from '../../redux/actions/selectOptionAction';
import { setLSProduct } from '../../redux/actions/setLocalstoreAction';
import { getLSProduct } from '../../redux/actions/getLocalstoreAction';
import { removeLSProduct } from '../../redux/actions/removeLocalstoreAction';
import { exampleFunction } from '../../utils/logictis';
import { Loading, PopupButton, ProductListItem, CartItem, ProductDetail } from '../../components';
import { Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { toast } from "react-toastify";
import { CART } from '../../utils/constant';


const Product = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch();
    //useSelector
    const productSelector = useSelector(state => state.product);
    const { product, error, loading } = productSelector;

    const dataLsSelecttor = useSelector(state => state.datagetLS);
    const { data } = dataLsSelecttor;

    const removeProductSelector = useSelector(state => state.removeProduct);
    const { dataRemove } = removeProductSelector;

    const selectOptionSelector = useSelector(state => state.selectOption);
    const { selectOption } = selectOptionSelector;
    //useState
    const [showCartPopup, setShowCartPopup] = useState(false);
    const [showHistoryPopup, setShowHistoryPopup] = useState(false);
    const [countData, setCountData] = useState(JSON.parse(data));

    const [showPopupDetail, setShowPopupDetail] = useState(false)
    const [productDetail, setProductDetail] = useState([])
    const [selectSize, setSelectSize] = useState('');
    const [detail_id, setDetail_id] = useState(1)

    //useEffect
    useEffect(() => {
        dispatch(getAllProduct({ storeId: 1 }));
        dispatch(getAllSelectOption({ detail_id }));
    }, [])

    useEffect(() => { getCartFromLS() }, [dataRemove, removeProductSelector]);

    useEffect(() => {
        const init = () => {
            setCountData(JSON.parse(data))
        }
        init();
    }, [data])

    // const notify = () => toast.success(t('homepage.paymentSuccess'), {
    //   position: "top-center",
    //   autoClose: 1500,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });

    const addProductCart = (value) => {
        dispatch(setLSProduct(value));
    }

    // Xóa từng Item trong Cart
    const removeProductCart = (product_id) => {
        dispatch(removeLSProduct(product_id));
    };

    const getCartFromLS = () => {
        dispatch(getLSProduct(CART));
    }

    const _setProductDetail = (product_detail) => {
        let detail_id = product_detail?.id;
        dispatch(getAllSelectOption({ detail_id }));
        if (selectOption) {
            setShowPopupDetail(!showPopupDetail)
            setProductDetail(product_detail);
        }
    }


    const onChangeSizeDetail = (e) => {
        setSelectSize(e);

    }

    return (
        <Container>
            <div className='home-hot-products'>
                <div className="section-title">
                    <div className="text-1">AGL Menu</div>
                    <div className="text-2">{t('homepage.milkteaworld')}</div>
                    <div className="icon-bottom-title"></div>
                </div>
                <div className="section-content container">
                    {loading && <Loading />}
                    {error && <div>{error}</div>}

                    {product && <ProductListItem product={product}
                        setProductDetail={(value) => {
                            _setProductDetail(value)
                        }}
                    />}

                    {showPopupDetail && selectOption?.size && <ProductDetail
                        selectOption={selectOption ?? []}
                        selectSize={selectOption?.size}
                        selectedSize={selectSize}
                        setSelectSize={(e) => {
                            onChangeSizeDetail(e)
                        }
                        }
                        showPopupDetail={showPopupDetail}
                        setShowPopupDetail={setShowPopupDetail}
                        productDetail={productDetail}
                        addProductCart={(value) => {
                            addProductCart(value);
                        }} />}
                    <PopupButton
                        showCartPopup={showCartPopup}
                        setShowCartPopup={() => {
                            setShowCartPopup(!showCartPopup)
                            getCartFromLS()
                        }}
                        showHistoryPopup={showHistoryPopup}
                        setShowHistoryPopup={() => setShowHistoryPopup(!showHistoryPopup)}
                        cartPopupContent={data && <CartItem data={data} removeProductCart={(key) => removeProductCart(key)} />}
                        historyPopupContent={<p>History</p>}
                        countData={countData}
                    >
                    </PopupButton>
                </div>
            </div>
        </Container >
    )
}

export default Product