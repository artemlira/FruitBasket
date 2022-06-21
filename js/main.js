'use sctrict';

class FruitBasket {
   constructor({ wrapper, rightCells, leftCells }) {
      this.wrapper = document.querySelector(wrapper);
      this.rightCells = this.wrapper.querySelectorAll(rightCells);
      this.leftCells = this.wrapper.querySelectorAll(leftCells);
   }

   dragStart() {
      this.wrapper.addEventListener('dragstart', (event) => {
         if (event.target.matches('img')) {
            event.dataTransfer.setData('id', event.target.id);
            setTimeout(() => {
               event.target.classList.add('hide');
            }, 0);
         }
      })
   }

   dragEnd() {
      this.wrapper.addEventListener('dragend', (event) => {
         event.target.classList.remove('hide');
      })
   }

   dragOver(event) {
      event.preventDefault();
   }

   dragEnter() {
      this.classList.add('hovered');
   }

   dragLeave() {
      this.classList.remove('hovered');
   }

   dragDrop(event) {
      let card = event.dataTransfer.getData('id');

      if (this.childElementCount == 0) {
         this.append(document.getElementById(card));
      }

      this.classList.remove('hovered');
   }

   toRightDrags() {
      this.rightCells.forEach((cell) => {
         cell.addEventListener('dragover', this.dragOver);
         cell.addEventListener('dragenter', this.dragEnter);
         cell.addEventListener('dragleave', this.dragLeave);
         cell.addEventListener('drop', this.dragDrop);
      });
   }

   toLeftDrags() {
      this.leftCells.forEach((cell) => {
         cell.addEventListener('dragover', this.dragOver);
         cell.addEventListener('dragenter', this.dragEnter);
         cell.addEventListener('dragleave', this.dragLeave);
         cell.addEventListener('drop', this.dragDrop);
      });
   }

   init() {
      console.dir(this);
      this.dragStart();
      this.dragEnd();
      this.toRightDrags();
      this.toLeftDrags();
   }
}

let obj = {
   wrapper: '.wrapper',
   rightCells: '.right__cell',
   leftCells: '.left__cell'
}

const basket = new FruitBasket(obj);
basket.init();



