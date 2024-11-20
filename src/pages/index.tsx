import Test from "@/components/Test";
import yayJpg from "../assets/yay.jpg";
import { observer } from "mobx-react";
import { useState } from "react";

function HomePage() {
  const [list, setList] = useState<JSX.Element[]>([]);
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <button
        onClick={() => {
          list.push(<Test title={`新增组件${list.length + 1}`}/>);
          setList([...list]);
        }}
      >
        改变Store 再新增一个新组件 看变化
      </button>
      会发现新实例化的组件中的Store代码为修改后的代码
      <div style={{ display: "flex", flexWrap: "wrap",marginTop:"20px" }}>
        <div style={{ width: "25%" }}>
          <Test title="初始实例化组件1" />
        </div>
        <div style={{ width: "25%" }}>
          <Test title="初始实例化组件2" />
        </div>
        {list.map((com) => com)}
      </div>
    </div>
  );
}

export default observer(HomePage);
