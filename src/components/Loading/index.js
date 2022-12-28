import React from "react";
import "./style.css";

export const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
        </div>
    );
}