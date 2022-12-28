import React from "react";
import { useRouter } from "next/router";
  
const User = () => {
  const router = useRouter();
  return <h1>User with id {router.query.id}</h1>;
};
  
export default User;