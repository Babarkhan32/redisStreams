import React from "react";
import "../Assets/Listings.css";
import style from "../Assets/Listings.module.css";

const ListingItemUi = ({ Title, ID, textBefore, textAfter, status }) => {
  return (
    <div className="row">
      <div className="col-lg-1 col-sm-1 col-md-1  col-lg-1 col-xl-1">
        <label className={style.IdText}> {ID} </label>
      </div>
      <div className="col-lg-4 col-sm-4 col-md-4  col-lg-4 col-xl-4">
        <h6 className={style.TitleText}> {Title} </h6>
      </div>
      <div className="col-lg-4 col-sm-4 col-md-4  col-lg-4 col-xl-4"></div>
      <div className="col-lg-3 col-sm-3 col-md-3  col-lg-3 col-xl-3">
        <label className={style.MomentsText}>
          {" "}
          {textBefore} &nbsp; {textAfter}{" "}
        </label>
      </div>
    </div>
  );
};
export default ListingItemUi;
