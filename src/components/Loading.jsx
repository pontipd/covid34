import React from "react";

const Loading = () => {
  return (
    <>
      <div id="isLoading" className="isLoading">
        <div className="loading-content">

          <div className="loading-items">
            <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube" />
              <div className="sk-cube2 sk-cube" />
              <div className="sk-cube4 sk-cube" />
              <div className="sk-cube3 sk-cube" />
            </div>
            <h1 data-text="Loading...">Loading...</h1>
          </div>

        </div>
      </div>
    </>
  );
};

export default Loading;
