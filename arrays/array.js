class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //Obtener elemento
  get(index) {
    return this.data[index]
  }

  //Crear elemento al final
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data
  }

  //Remover elemento
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const deleteItem = this.data[index]
    this.shiftIndex(index);
    return deleteItem;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] + this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray()