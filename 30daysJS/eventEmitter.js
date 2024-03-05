class EventEmitter {
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    const listeners = this.events.get(eventName);
    listeners.push(callback);

    return {
      unsubscribe: () => {
        const index = listeners.indexOf(callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }

        return undefined;
      }
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events.has(eventName)) return [];

    const result = [];
    const listeners = this.events.get(eventName);
    listeners?.forEach(listener => {
      result.push(listener(...args));
    });

    return result;
  }
}

// use case #0
// const emitter = new EventEmitter();

// // Subscribe to the onClick event with onClickCallback
// function onClickCallback() {
//   return 99;
// }
// const sub = emitter.subscribe('onClick', onClickCallback);

// console.log(emitter.emit('onClick')); // [99]
// sub.unsubscribe(); // undefined
// console.log(emitter.emit('onClick')); // []

// use case #1
// const emitter = new EventEmitter();
// console.log(emitter.emit('firstEvent')); // [], no callback are subscribed yet
// emitter.subscribe('firstEvent', function cb1() {
//   return 5;
// });
// emitter.subscribe('firstEvent', function cb2() {
//   return 6;
// });
// console.log(emitter.emit('firstEvent')); // [5, 6], returns the output of cb1 and cb2

// use case #2
// const emitter = new EventEmitter();
// const sub = emitter.subscribe('firstEvent', (...args) => args.join(','));
// console.log(emitter.emit('firstEvent', [1, 2, 3])); // ["1,2,3"]
// console.log(sub.unsubscribe()); // undefined
// console.log(emitter.emit('firstEvent', [4, 5, 6])); // [], there are no subscriptions

// use case #3
// const emitter = new EventEmitter();
// const sub1 = emitter.subscribe('firstEvent', x => x + 1);
// const sub2 = emitter.subscribe('firstEvent', x => x + 2);
// console.log(sub1.unsubscribe()); // undefined
// console.log(emitter.emit('firstEvent', [5])); // [7]

// use case #4
const emitter = new EventEmitter();
const sub1 = emitter.subscribe('firstEvent', x => x + 1);
const sub2 = emitter.subscribe('firstEvent', x => x + 2);
const sub3 = emitter.subscribe('firstEvent', x => x + 3);
console.log(sub2.unsubscribe()); // undefined
console.log(sub3.unsubscribe()); // undefined
console.log(emitter.emit('firstEvent', [5])); // [7]
