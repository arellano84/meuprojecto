import { element } from 'protractor';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
  // selector: '[input]' <-- cambiaria automaticamente a todos los input sin agregar el nuevo.
})
export class CampoColoridoDirective {

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) {
      console.log(this.elementRef.nativeElement);
      this.renderer.setStyle(this.elementRef.nativeElement,
        'background-color', 'yellow');
    }

}
