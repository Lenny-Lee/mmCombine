/*
 * @Author: Lenny
 * @Date: 2024-11-15 17:47:33
 * @FilePath: /umijs4332/src/components/store.ts
 * @Description:
 */
import { makeAutoObservable, flow } from "mobx";
class Store {
  list = [];
  ownCount = 1;
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  fakeFetch = flow(function* (this: Store) {
    yield new Promise((resolve) => setTimeout(resolve, 1000));
    this.list = [23213, 3333, "我改了"];
  });

  increment() {
    this.ownCount += 1;
  }
}

// const store = new Store();
export default Store;
