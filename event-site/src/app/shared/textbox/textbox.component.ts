import { ControlValueAccessorConnector } from './../services/control-value-accessor-connector';
import { Component, Input, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  providers: [{ 
    provide: NG_VALUE_ACCESSOR, 
    useExisting: TextboxComponent, 
    multi: true 
  }]
})
export class TextboxComponent extends ControlValueAccessorConnector {
  constructor(injector: Injector) {
    super(injector);
  }

  @Input() type: string = "text";
  @Input() placeholder: string;
}
