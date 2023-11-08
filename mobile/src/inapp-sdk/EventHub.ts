export class EventHub {
  callbacks: {[key: string]: any};

  constructor() {
    this.callbacks = {};
  }

  on(event: string, cb: () => void) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }

    this.callbacks[event].push(cb);
  }

  off(event: string) {
    if (!this.callbacks[event]) {
      return;
    }
    delete this.callbacks[event];
  }

  emit(event: string, data: any) {
    if (!this.callbacks[event]) {
      return;
    }

    this.callbacks[event].forEach((cb: (value: any) => void) => {
      return cb(data);
    });
  }
}
