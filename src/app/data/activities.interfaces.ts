export interface IActivity {
  id_actividad: number;
  nombre_actividad: string;
  numero_vacantes: string;
  nombre_prestatario: string;
  nombre_largo_prestatario: string;
  nombre_programa: string;
  fechaInicioTermino: string;
  objetivo_programa: string;
  justificacion_programa: string;
  domicilio_programa: string;
  nombre_representante: string;
  medios_contacto_representante: string;
  apoyos_programa: string;
}

export interface IActivityApplication extends  IActivity {
  actividad_removed: boolean;
  actividad_liked: boolean;
}

export interface IFiltroBusqueda {
  textoBusqueda: string;
  filtroBusqueda: string;
}
