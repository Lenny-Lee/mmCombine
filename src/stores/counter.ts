// src/stores/counter.ts
import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}

const counterStore = new CounterStore();

// 允许开发环境下支持热更新
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

export default counterStore;
