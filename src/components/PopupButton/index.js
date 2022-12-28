import React, { useEffect, useState } from "react";
import Popup from "react-animated-popup";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale-extreme.css";

// import HistoryCart from "../HistoryCart";
import classnames from "classnames/bind";
import style from "./Popup.module.scss";
import { useTranslation } from 'react-i18next';
import { images } from "../../images";

const cx = classnames.bind(style);

function PopupButton({
    setShowCartPopup,
    showCartPopup,
    cartPopupContent,
    historyPopupContent,
    showHistoryPopup,
    setShowHistoryPopup,
    popupContent,
    countData
}) {
    const { t } = useTranslation()
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <>
            <div className="popup">
                <Tippy content={t('homepage.toolBarToolTips')} animation="scale-extreme" delay={(0, 0)}>
                    <a
                        onClick={() => handleShowMenu()}
                        className={cx("btn-delivery", showMenu ? "active" : "")}
                    >
                        <img src={images.delivery} alt="" />
                        {countData != null && countData.length > 0 ? (
                            <span className={cx("qty")}>{countData.length}</span>
                        ) : (
                            ""
                        )}
                    </a>
                </Tippy>

                {/* Giỏ hàng */}
                <Tippy content={t('homepage.cartToolTips')} animation="scale-extreme" delay={(0, 0)}>
                    <a
                        onClick={() => setShowCartPopup(!showCartPopup)}
                        className={cx(
                            "btn-cart",
                            showMenu ? "show-menu-cart" : "",
                            showCartPopup ? "active" : ""
                        )}
                    >
                        <img src={images.imgcart} alt="" />
                        {/* {cartPopupContent.length ? (
                            <span className={cx("qty")}>{cartPopupContent.length}</span>
                        ) : (
                            ""
                        )} */}
                    </a>
                </Tippy>

                <div className={cx("popup-over", showCartPopup ? "show-cart" : "")}>
                    <Popup
                        visible={showCartPopup}
                        animationDuration="500"
                        onClose={() => setShowCartPopup(!showCartPopup)}
                    >
                        <a onClick={() => setShowCartPopup(!showCartPopup)}>x</a>
                        {cartPopupContent}
                    </Popup>
                </div>

                {/* Lịch sử đơn hàng */}
                <Tippy
                    content={t('homepage.orderHistoryToolTips')}
                    animation="scale-extreme"
                    delay={(0, 0)}
                >
                    <a
                        onClick={() => setShowHistoryPopup(!showHistoryPopup)}
                        className={cx(
                            "btn-history",
                            showMenu ? "show-menu-history" : "",
                            showHistoryPopup ? "active" : ""
                        )}
                    >
                        <img src={images.imghistory} alt="" />
                    </a>
                </Tippy>

                <div
                    className={cx(
                        "popup-over",
                        showHistoryPopup ? "show-history-cart" : ""
                    )}
                >
                    <Popup
                        visible={showHistoryPopup}
                        animationDuration="500"
                        onClose={() => setShowHistoryPopup(false)}
                    >
                        <a onClick={() => setShowHistoryPopup()}>x</a>
                        {/* {<HistoryCart></HistoryCart>} */}
                        {historyPopupContent}
                    </Popup>
                </div>
            </div>
        </>
    );
}

export default PopupButton;
