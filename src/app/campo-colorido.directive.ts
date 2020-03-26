import { element } from 'protractor';
import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
  // selector: '[input]' <-- cambiaria automaticamente a todos los input sin agregar el nuevo.
})
export class CampoColoridoDirective {

  // asigna el valor a la propiedad
  @HostBinding('style.backgroundColor') colorDeFondo: string;

  /*constructor(private elementRef: ElementRef,
    private renderer: Renderer2) {
      console.log(this.elementRef.nativeElement);
      // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    }*/

    // Gana Foco y queda amarillo
    @HostListener('focus') alGanarFoco() {

      this.colorDeFondo = 'yellow';
      // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    }

    // Pierde Foco y queda blanco
    @HostListener('blur') alPerderFoco() {
      this.colorDeFondo = 'transparent';
      // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    }

}
