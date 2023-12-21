import React, { useState } from "react";
import MemberDetail from "./memberDetail";
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}
function Member({ name, enthusiasmLevel = 1 }: Props) {
  const [count, setMemberCount] = useState(0);
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }
  const countMembers = () => {
    setMemberCount(count + 1);
  };
  const memberData = {
    id: 1,
    name: "Kelly",
    account: "kelly1234",
    age: 19,
    email: "kejrkt@gmail.com",
  };
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <MemberDetail
        id={memberData.id}
        name={memberData.name}
        account={memberData.account}
        age={memberData.age}
        email={memberData.email}
      />
      <div>
        <p>目前計數：{count}</p>
        <button onClick={countMembers}>增加計數</button>
      </div>
    </div>
  );
}

export default Member;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
