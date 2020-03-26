import { element } from 'protractor';
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
  // selector: '[input]' <-- cambiaria automaticamente a todos los input sin agregar el nuevo.
})
export class CampoColoridoDirective {

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) {
      console.log(this.elementRef.nativeElement);
      // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    }

    // Gana Foco y queda amarillo
    @HostListener('focus') alGanarFoco() {
      this.renderer.setStyle(this.elementRef.nativeElement,
        'background-color', 'yellow');
    }

    // Pierde Foco y queda blanco
    @HostListener('blur') alPerderFoco() {
      this.renderer.setStyle(this.elementRef.nativeElement,
        'background-color', 'transparent');
    }

}
