module.exports = class EventEmitter {
  // master object which has a key-value pair
  listeners = {};

  addListener(eventName, func) {
    // define an empty array initially else copy data
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(func);
    return this;
  }

  removeListener(eventName, func) {
    const listener = this.listeners[eventName];
    if (!listener.length) return this;
    console.log("Remove listener:", listener);
    for (let i = listener.length; i > 0; i--) {
      if (listener[i] === func) {
        listener.splice(i, 1);
        break;
      }
    }

    return this;
  }

  on(eventName, func) {
    return this.addListener(eventName, func);
  }

  off(eventName, func) {
    return this.removeListener(eventName, func);
  }

  once(eventName, func) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    const onceWrapper = () => {
      func(arguments);
      this.off(eventName, func);
    };
    this.listeners[eventName].push(onceWrapper);
    return this;
  }

  emit(eventName, ...args) {
    const funcs = this.listeners[eventName];
    if (!funcs.length) return false;
    console.log(args);
    funcs.forEach((func) => {
      func(...args);
    });
    return true;
  }

  printListeners() {
    console.log(this.listeners);
  }
};
