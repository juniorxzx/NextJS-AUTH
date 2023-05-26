import React from "react";

const AuthPageStatic = (props) => {
  return (
    <div>
      <h1>auth-page-static</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default AuthPageStatic;
