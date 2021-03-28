interface EventListenerOption {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}

declare interface addEventListener {
  (name: string, fn: () => void, option?: boolean | EventListenerOption): void;
}

// 使用例
addEventListener("foobar", () => {});
addEventListener("event", () => {}, true);
addEventListener("event2", () => {}, {});
addEventListener("event3", () => {}, {
  capture: true,
  once: false
});

// エラー例
addEventListener("foobar", () => {}, "string");
addEventListener("hoge", () => {}, {
  capture: true,
  once: false,
  excess: true
});

export default {}
