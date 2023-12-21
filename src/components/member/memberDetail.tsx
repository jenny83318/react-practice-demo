import React, { useState } from "react";

export interface Props {
  id: number;
  name: string;
  account: string;
  age: number;
  email: string;
}

function MemberDetail({ id, name, account, age, email }: Props) {
    console.log("id",id);
    console.log("name",name);
    console.log("age",age);
    console.log("account",account);
    console.log("email",email);

  return (
    <div className="hello">
      <div className="greeting">id: {id}</div>
      <div className="greeting">name: {name}</div>
      <div className="greeting">age: {age}</div>
      <div className="greeting">account: {account}</div>
      <div className="greeting">email: {email}</div>
    </div>
  );
}
export default MemberDetail;
