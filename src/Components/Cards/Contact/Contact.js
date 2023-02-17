import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="bailleur">
        <div class="squar--portrait">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            width={"100%"}
            height={"100%"}
            alt="sdv"
          />
        </div>
        <p>Guillaume Anderson</p>
      </div>
      <div className="icones">
        <div className="phone">
          <svg
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.40762 1.15321C7.06172 0.28133 6.1498 -0.182732 5.27832 0.0657054L1.3252 1.19071C0.543555 1.41571 0 2.15633 0 3.00008C0 14.597 9.01133 24.0001 20.125 24.0001C20.9336 24.0001 21.6434 23.4329 21.859 22.6173L22.9371 18.4923C23.1752 17.5829 22.7305 16.6313 21.8949 16.2704L17.5824 14.3954C16.8502 14.0766 16.0012 14.297 15.5025 14.9391L13.6877 17.2501C10.5252 15.6891 7.96465 13.0173 6.46875 9.71727L8.6834 7.82821C9.29883 7.30321 9.50996 6.42195 9.20449 5.65789L7.40762 1.15789V1.15321Z"
              fill="#27AE60"
            />
          </svg>
        </div>
        <div className="mail">
          <svg
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.4375 0.25C1.0918 0.25 0 1.3418 0 2.6875C0 3.4543 0.360547 4.17539 0.975 4.6375L12.025 12.925C12.6039 13.3566 13.3961 13.3566 13.975 12.925L25.025 4.6375C25.6395 4.17539 26 3.4543 26 2.6875C26 1.3418 24.9082 0.25 23.5625 0.25H2.4375ZM0 5.9375V16.5C0 18.2926 1.45742 19.75 3.25 19.75H22.75C24.5426 19.75 26 18.2926 26 16.5V5.9375L14.95 14.225C13.7922 15.0934 12.2078 15.0934 11.05 14.225L0 5.9375Z"
              fill="#333333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
