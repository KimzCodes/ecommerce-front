import React from "react";

import useAuth from "../../hooks/use-auth";

const Account = () => {
  const { userInfo } = useAuth();
  return (
    <div>
      <h2 className="mt-3 mb-3">Your Information:</h2>
      <ul>
        <li>First Name:{userInfo.firstName}</li>
        <li>Last Name:{userInfo.lastName}</li>
        <li>Email:{userInfo.email}</li>
      </ul>
    </div>
  );
};

export default Account;
