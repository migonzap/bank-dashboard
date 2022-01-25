# BankDashboard

BankDashboard es una aplicación web para revisar diferentes indicadores económicos.
El proyecto fue desarrollando usando [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Ejecución de la aplicación

1. Debes tener instalado la última versión estable de NodeJS.
2. Ejecuta `npm install` para instalar las dependencias de la aplicación.
3. Ejecuta `ng serve` para correr un servidor de desarrollo y esperar su inicio.
4. Navega a `http://localhost:4200/`. La aplicación se refrescará automáticamente si cambias algún archivo fuente.


## Construcción de la aplicación

Ejecuta `ng build` para construir el proyecto. Los artefactos construidos estarán guardados en el directorio `dist/`.

## Ejecutar pruebas unitarias

Ejecuta `ng test --include=**/dashboard.component.spec.ts` para ejecutar las pruebas unitarias usando [Karma](https://karma-runner.github.io).
Las siguientes pruebas verifican el funcionamiento de una funcionalidad crítica de la aplicación:
- `should fill dashboard components when data is successfully retrieved`: Verifica que se desplieguen los componentes del Panel y que contengan la información correcta.
- `should not fill dashboard components when no data was found`: Verifica que los componentes del Panel señalen que no hay datos cuando no hay información que desplegar.



