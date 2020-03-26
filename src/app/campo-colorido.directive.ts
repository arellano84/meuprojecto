import { element } from 'protractor';
import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
  // selector: '[input]' <-- cambiaria automaticamente a todos los input sin agregar el nuevo.
})
export class CampoColoridoDirective {

  @Input() color = 'gray';
  // @Input('appCampoColorido') color = 'gray';

  // asigna el valor a la propiedad
  @HostBinding('style.backgroundColor') colorDeFondo: string;

    // Gana Foco y queda amarillo
    @HostListener('focus') alGanarFoco() {
      this.colorDeFondo = this.color;
    }

    // Pierde Foco y queda blanco
    @HostListener('blur') alPerderFoco() {
      this.colorDeFondo = 'transparent';
    }

}
