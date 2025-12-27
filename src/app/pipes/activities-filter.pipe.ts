import { Pipe, PipeTransform } from '@angular/core';
import { IActivityApplication } from '../data/activities.interfaces';

@Pipe({
    name: 'activitiesFilter',
    standalone: false
})
export class ActivitiesFilterPipe implements PipeTransform {
  transform(
    activities: IActivityApplication[],
    textoBusqueda: string,
    filtroBusqueda: string
  ): IActivityApplication[] {
    if (filtroBusqueda == 'actividad') {
      return activities.filter((activity) => {
        const nombreActividad = activity.nombre_actividad
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();
        const nombrePrograma = activity.nombre_programa
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();
        const textoBuscar = textoBusqueda
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();

        return (
          nombreActividad.includes(textoBuscar) ||
          nombrePrograma.includes(textoBuscar)
        );
      });
    }

    if (filtroBusqueda == 'direccion') {
      return activities.filter((activity) => {
        const domicilioPrograma = activity.domicilio_programa
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();
        const textoBuscar = textoBusqueda
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();

        return domicilioPrograma.includes(textoBuscar);
      });
    }

    if (filtroBusqueda == 'prestatario') {
      return activities.filter((activity) => {
        const nombrePrestatario = activity.nombre_prestatario
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();
        const nombrePrestatarioLargo = activity.nombre_largo_prestatario
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();
        const textoBuscar = textoBusqueda
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();

        return (
          nombrePrestatario.includes(textoBuscar) ||
          nombrePrestatarioLargo.includes(textoBuscar)
        );
      });
    }

    if (filtroBusqueda == 'objetivo') {
      return activities.filter((activity) => {
        const objetivo = activity.objetivo_programa
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();
        const justificacion = activity.justificacion_programa
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();
        const textoBuscar = textoBusqueda
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase();

        return (
          objetivo.includes(textoBuscar) || justificacion.includes(textoBuscar)
        );
      });
    }

    return activities;
  }
}
