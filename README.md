# AngularApp
La aplicación cuenta con un sistema de autenticación integrado a partir de un boilerplate https://github.com/mparra43/boilerplate-express-api, mediante el cual los usuarios pueden registrarse utilizando su dirección de correo electrónico, contraseña, session_id y guest_session_id. Una vez que un usuario ha completado el proceso de autenticación a través de la API de themoviedb.org, se habilita su acceso a la sección correspondiente.

Para asegurar un funcionamiento adecuado, es esencial incorporar en los archivos de entorno los ajustes necesarios. En particular, en el campo 'apiUser', se debe incluir la URL de la API que se encarga tanto de la autenticación de la aplicación como de la gestión de los marcadores relacionados con las películas.

Por otro lado, el conjunto de campos 'userApi', 'account' y 'token' corresponde a los elementos suministrados por la API de themoviedb.org. Estos campos son vitales para el consumo adecuado de los diversos servicios ofrecidos por dicha API, permitiendo así una interacción fluida y eficiente con sus recursos.


#uso 
Primero, genere las variables de sesión session_id y guest_session_id a través de themoviedb.org. Luego, utilice el servicio POST {{base url boilerplate}}/api/v1/users/ para crear un usuario en la aplicación.

Una vez creado el usuario, proceda a autenticarse en la aplicación utilizando la dirección de correo electrónico y la contraseña proporcionadas durante el proceso de creación.

#Login

![image](https://github.com/mparra43/angular-app/assets/66500440/d1f5cef0-ffe9-44f7-8292-345257cd2992)

#Home

![image](https://github.com/mparra43/angular-app/assets/66500440/24172e1b-aa3f-43c0-9546-6d5d0d1de2bc)

#Busqueda Home 

![image](https://github.com/mparra43/angular-app/assets/66500440/93423595-8078-4245-9e0d-2e2a9a4829a2)

#Series 
![image](https://github.com/mparra43/angular-app/assets/66500440/364512ab-e9d6-417b-85ad-045793a7f981)

#Detalle película 

![image](https://github.com/mparra43/angular-app/assets/66500440/e37c47c4-7a77-4009-932e-424245c7a54f)


# Calificación 
![image](https://github.com/mparra43/angular-app/assets/66500440/0fd72f42-b031-4277-8c39-94e2ca6909aa)

![image](https://github.com/mparra43/angular-app/assets/66500440/83233c09-f8fa-4c55-bc2f-56abb30a67fc)

#Favoritos 
![image](https://github.com/mparra43/angular-app/assets/66500440/e61f1c88-98c3-4c5c-a7b7-774f3dffc85b)

#Notas sobre las película favoritAS

![image](https://github.com/mparra43/angular-app/assets/66500440/d97e24cc-788b-4970-b3dd-4cb3863caa0d)




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
