interface EventPayloads {
  start: {
    user: string;
  };
  stop: {
    user: string;
    after: number;
  };
  end: {};
}

class EventDischarger<E> {
  emit<K extends keyof E>(eventName: K, payload: E[K]) {
    // 省略
  }
}

// 使用例
const ed = new EventDischarger<EventPayloads>();
ed.emit("start", {
  user: "user1"
});
ed.emit("stop", {
  user: "user1",
  after: 3
});
ed.emit("end", {});

// エラー例
ed.emit("start", {
  user: "user2",
  after: 0
});
ed.emit("stop", {
  user: "user2"
});
ed.emit("foobar", {
  foo: 123
});

export default {}
