import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxDefaultOptions } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox-header',
  templateUrl: './checkbox-header.component.html',
  styleUrls: ['./checkbox-header.component.scss'],
  providers:  [{provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions}]
})
export class CheckboxHeaderComponent {

  @Input() title: string = 'sample title';
  @Input() shouldHeaderCheckboxBeChecked: boolean = false;
  @Input() shouldHeaderCheckboxBeIndeterminate: boolean = false;
  @Output() headerCheckEventEmitter = new EventEmitter<boolean>();

  emitHeaderCheck(event: any){
    console.log('hello from emitHeaderCheck');
    this.headerCheckEventEmitter.emit();
  }

}
