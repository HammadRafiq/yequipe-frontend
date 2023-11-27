import React, { Fragment } from "react";
import Link from "next/link";

const LogoImage = ({ logo, ...rest }) => {
  return (
    <Fragment>
      <Link href={"/"}>
        <img
          src={`/assets/images/icon/${logo ? logo : "logo.png"}`}
          alt=""
          className="img-fluid"
          width={35}
          {...rest}
        />
      </Link>
    </Fragment>
  );
};

export default LogoImage;
