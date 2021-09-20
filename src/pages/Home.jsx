import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogOutState, selectUserName } from "../app/reducer/userSlice";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/images/logopptn.svg";
import img1 from "../assets/images/21249.png";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserLogOutState());
        window.location.reload();
      })
      .catch((err) => alert(err.message));
  };
  return (
    <>
      <div id="home" className="home">
        <section id="banner-top">
          <div className="home-logo">
            <img src={logo} alt="Plearnpattana Logo" />
          </div>
          <div
            id="home-navigation-auth"
            className="d-flex justify-content-center"
          >
            {userName ? (
              <>
                <div className="input-group">
                  <Link
                    to="/account"
                    style={{ marginRight: "0", borderRadius: "10px  0 0 10px" }}
                  >
                    My Account
                  </Link>
                  <button className="btn btn-danger" onClick={handleSignOut}>
                    <FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
                    &nbsp; Sign out
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/sign-in">Sign in</Link>
                <Link to="/sign-up">Sign up</Link>
              </>
            )}
          </div>
        </section>
        <section id="home-content">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img src={img1} alt="research" width="100%" />
              </div>
              <div className="col-md-7">
                <h3>IMPORTANT</h3>
                <p>
                  เมื่อคุณใช้บริการของเรา คุณไว้วางใจให้เรารักษาข้อมูลของคุณ
                  เราเข้าใจว่านี่คือความรับผิดชอบที่ยิ่งใหญ่และพยายามอย่างยิ่ง
                  ที่จะปกป้องข้อมูลของคุณ รวมถึงมอบอำนาจในการควบคุม
                  ข้อมูลให้แก่คุณ
                </p>
                <h3>Read agreement</h3>
                <p>
                  <Link to="/agreement">read more</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
