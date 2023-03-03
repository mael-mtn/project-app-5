import React from "react";
import "./Previous.css";
import {useNavigate} from 'react-router-dom';

export default function Previous() {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }


  return (
    <button className="previous-tag" onClick={goBack}>
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0196 21.5214L11.8974 22.6437C11.4222 23.1189 10.6538 23.1189 10.1837 22.6437L0.356391 12.8215C-0.118797 12.3463 -0.118797 11.5779 0.356391 11.1077L10.1837 1.28046C10.6589 0.805275 11.4272 0.805275 11.8974 1.28046L13.0196 2.40271C13.4999 2.88296 13.4898 3.66651 12.9994 4.13664L6.90791 9.94H21.4365C22.1089 9.94 22.6498 10.4809 22.6498 11.1532V12.7709C22.6498 13.4432 22.1089 13.9841 21.4365 13.9841H6.90791L12.9994 19.7875C13.4948 20.2576 13.5049 21.0412 13.0196 21.5214Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

