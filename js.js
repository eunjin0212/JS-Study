const obj = {
  name: "wee",
  A() {
    console.log(this.name);
  },
  B() {
    const name = "bee";
    console.log(this.name);
  },
  C() {
    const name = "cee";
    function innerFunc() {
      console.log(this.name);
    }
    innerFunc.bind(this)();
  },
  D() {
    const name = "dee";
    return function () {
      console.log(this.name);
    };
  },
};
const { A, B, C, D } = obj;
obj.C();
C();
console.log();
obj.D()();
