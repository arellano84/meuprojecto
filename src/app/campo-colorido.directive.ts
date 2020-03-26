import { element } from 'protractor';
import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColoreado' // instancia de directiva que podra acceder en el input
  // selector: '[input]' <-- cambiaria automaticamente a todos los input sin agregar el nuevo.
})
export class CampoColoridoDirective {

  @Input() color = 'gray';
  // @Input('appCampoColorido') color = 'gray';

  // asigna el valor a la propiedad
  @HostBinding('style.backgroundColor') colorDeFondo: string;

    // Gana Foco y queda amarillo
    @HostListener('focus') colorear() {
      this.colorDeFondo = this.color;
    }

    // Pierde Foco y queda blanco
    @HostListener('blur') descolorear() {
      this.colorDeFondo = 'transparent';
    }

}
