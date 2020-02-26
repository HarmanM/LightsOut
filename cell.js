class Cell {

  constructor(i, j, w) {
    this.i = i;
    this.j = j;
    this.w = w;
    this.x = i * w;
    this.y = j * w;
    this.lit = false;


  }

  show() {
    
    if (this.lit) {
      fill(225)
    } else {
      fill(50);
    }

  rect(this.x, this.y, this.w, this.w);
  }

  contains(x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
  }

  flipSwitch() {
    if (this.lit) {
      this.lit = false;
    } else {
      this.lit = true;
    }
  }

}