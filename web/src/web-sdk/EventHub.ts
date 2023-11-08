export class EventHub {
  events: { [key: string]: any };

  constructor() {
    this.events = {};
  }

  emit(event: string, data: unknown) {
    if (!this.events[event]) return;
    this.events[event].forEach((cb: (value: unknown) => void) => {
      return cb(data);
    });
  }

  on(event: string, cb: () => void) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(cb);
  }

  off(event: string) {
    if (!this.events[event]) return;
    delete this.events[event];
  }
}
