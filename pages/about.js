import Head from "next/head";
import React from "react";
import Meta from "@/components/Meta";


const about = () => {
  // Event the layout contain Meta component. It's does not repeate. It will override
  return (
    <>
      <Meta title='about' description='desc' keywords='test' />
      <div>about</div>
    </>
  );
};

export default about;
