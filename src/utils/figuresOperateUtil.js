function FiguresBak() {
  this.recoveryStack = [];
  this.cancelStack = [[]];
  this.clearFlag = false;
}

FiguresBak.prototype.addStatus = function (figures) {
  this.clearFlag = false;
  this.recoveryStack = [];
  this.cancelStack.push([...figures]);
};

FiguresBak.prototype.backStatus = function () {
  if (!this.clearFlag) {
    const tmp = this.cancelStack.pop();
    if (tmp) this.recoveryStack.push(tmp);
  } else {
    this.clearFlag = false;
  }
  const { length } = this.cancelStack;
  if (length) return this.cancelStack[length - 1];
  return null;
};
FiguresBak.prototype.recStatus = function () {
  const tmp = this.recoveryStack.pop();
  if (tmp) this.cancelStack.push(tmp);
  return tmp;
};

FiguresBak.prototype.clearAllStack = function () {
  if(this.clearFlag) return;
  this.clearFlag = true;
};

const Figures = new FiguresBak();

export default Figures;
