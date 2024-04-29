import React from "react";
import { Link } from "react-router-dom";
import event from "../pictures/event.png";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-warning rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-2 fw-bold">劇本殺預約排程系統</h1>
            <p className="col-md-8 fs-2">
              本系統是一個提供全台劇本殺活動之揪團、參團、預約等交流平台.玩家及主持人們可透過此平台進行交流、互動.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              了解劇本殺
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6 mb-2">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>作為一個玩家</h2>
              <p>玩家可以參加他們喜歡的劇本殺團。</p>
              <Link
                style={{ margin: "0.5rem" }}
                className="btn btn-primary"
                type="button"
                to="/register"
              >
                註冊帳號
              </Link>
              <Link
                style={{ margin: "0.5rem" }}
                className="btn btn-primary"
                type="button"
                to="/login"
              >
                會員登入
              </Link>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>作為一個主持人</h2>
              <p>您可以通過註冊成為一名主持人，並開始發布您的開團資訊。</p>
              <Link
                className="btn btn-primary"
                type="button"
                to="/postlarpevent"
              >
                揪團去~
              </Link>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2024 Darien Design
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
