import React from "react";

function AboutBox() {
  return (
    <div className="about_boxes grid">
      <div className="about_box">
        <i className="about_icon icon-fire"></i>
        <div>
          <h3 className="about_title">5</h3>
          <span className="about_subtitle">Project complete</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-cup"></i>
        <div>
          <h3 className="about_title">~230</h3>
          <span className="about_subtitle">Cup of coffee</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon icon-trophy"></i>
        <div>
          <h3 className="about_title">1</h3>
          <span className="about_subtitle">Nominees Winner</span>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
