import React from "react";

const FooterBottom = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        <a
          href="mailto:shubhambhagwat453@gmail.com"
          className="text-blue-500 hover:underline"
        >
          shubhambhagwat453@gmail.com
        </a>{" "}
        | © {new Date().getFullYear()}. All rights reserved by Shubham Bhagwat | +91 9011303974
      </p>
    </div>
  );
};

export default FooterBottom;
