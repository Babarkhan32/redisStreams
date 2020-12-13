import React from "react";
import { Input, Form, Button } from "antd";
import style from "../Assets/Listings.module.css";
import "../Assets/Listings.css";
import ListingItemUi from "./ListingItemUi";

const { Search } = Input;
const ListingsUi = (props) => {
  return (
    <div className={`ListingCont ${style.MainCont}`}>
      <div className={style.PageWrapper}>
        <div className="container">
          <div className="card">
            <Form name="listings">
              <div className="card-header">
                <div className="row">
                  <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                    <Form.Item name="stop" className={style.StopBtn}>
                      <Button
                        onClick={props.onStopData}
                        type="default"
                        size="medium"
                      >
                        {" "}
                        Stop{" "}
                      </Button>
                    </Form.Item>
                    <Form.Item name="resume">
                      <Button
                        // eslint-disable-next-line react/destructuring-assignment
                        onClick={props.onStartData}
                        type="primary"
                        size="medium"
                        className={style.ResumeBtn}
                      >
                        {" "}
                        Resume{" "}
                      </Button>
                    </Form.Item>
                  </div>
                  <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                    <Form.Item name="search">
                      <Search
                        onPressEnter={(e) => props.search(e.target.value)}
                        placeholder="Search Text"
                        allowClear
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className="card-body">

                {props.eventsData.length > 0
                  ? props.eventsData.map((event) => (
                    <ListingItemUi
                      Title={event}
                      ID="#c002ab"
                      textBefore="12/10/2020 PK"
                      textAfter="10:26:00 PM"
                    />
                  ))
                  : ""}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListingsUi;
