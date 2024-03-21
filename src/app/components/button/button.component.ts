import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'click me';
  @Input() redirectTo: string = '#';
  @Input() isExternal?: boolean;
  @Output() action: EventEmitter<void> = new EventEmitter();

  emitAction(): void {
    this.action.emit();
  }
}
