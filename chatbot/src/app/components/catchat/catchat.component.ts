import {Component, HostListener, OnInit} from '@angular/core';
@Component({
  selector: 'app-catchat',
  templateUrl: './catchat.html',
  styleUrls: ['./catchat.css']
})
export class CatChatComponent {
  isResizing: boolean = false;
  lastDownX: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isResizing) {
      return;
    }

    const container = document.getElementById('container')!;
    const left = document.getElementById('leftSide')!;
    const right = document.getElementById('rightSide')!;
    const catHand = document.querySelector('.hand-wrap .hand') as HTMLElement;

    const offsetRight = container.clientWidth - (event.clientX - container.offsetLeft);

    left.style.width = (container.clientWidth - offsetRight) + 'px';
    right.style.width = offsetRight + 'px';

    catHand.style.width = left.clientWidth + 'px';

    if (left.clientWidth < 270) {
      left.classList.add('closing');
      catHand.style.width = left.clientWidth + 'px';
      (document.querySelector('.hand-wrap') as HTMLElement).style.width = left.clientWidth + 'px';
    } else {
      left.classList.remove('closing');
      catHand.removeAttribute('style');
      (document.querySelector('.hand-wrap') as HTMLElement).removeAttribute('style');
    }

    if (left.clientWidth < 170) {
      (document.querySelector('.mouth') as HTMLElement).style.display = 'block';
    } else {
      (document.querySelector('.mouth') as HTMLElement).style.display = 'none';
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isResizing = false;
  }

  onMouseDown(event: MouseEvent) {
    this.isResizing = true;
    this.lastDownX = event.clientX;
  }
}
