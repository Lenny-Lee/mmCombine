import React, { useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { create } from "mobx-persist";
import Store from "./store";

const Test: React.FC = observer((props) => {
  //   const hydrate = create({});
  const store = useLocalObservable(() => new Store());
  // 通过 mobx-persist 将状态持久化
  //   hydrate("counter", store).then(() => {
  //     console.log("store has been hydrated");
  //   });
  return (
    <div>
      <div>{props.title}</div>
      <button onClick={() => store.fakeFetch()}>click Fetch</button>
      <button onClick={() => store.increment()}>click</button>
      <div>
        {store.list.map((item, index) => {
          return item;
        })}
      </div>
      <div>{store.ownCount}</div>
    </div>
  );
});
export default Test;
