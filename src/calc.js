export default class Cals {
  add(...args) {
    return args.reduce((a, b) => a + b , 0);
  }


}