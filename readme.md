# Calculadora de Presupuesto personal
<br>

### Calculadora de gastos familiares.
<br>

Programa sencillo que calcula ingresos y egresos en una cuenta personal. ( Los usuario creados tienen control de la misma cuenta personal de gastos - pensado como una cuenta hogar / familiar)

## Orientacion de instalacion - <br>

### Requerimientos

1. Node.JS
2. MariaDB

<br>
#### Instalacion

1. Clonar este repositorio

git clone https://github.com/juanpa0011/personalCal

<br>

2. Instalar las dependencias necesarias

npm install

<br>

3. Crear la base de datos, nombre a elegir. 

Naturalmente la base de datos original es 'presupuesto-personal' pero este dato puede ser modificador más adelante.

4. Importar el archivo presupuesto-personal.sql ubicado en ./database/presupuesto-personal.sql, puede usar algun gestor como phpMyAdmin.

Este archivo tiene todos los parametros, tablas y valores ingresados con el objetivo de iniciar las primeras pruebas.

5. Editar el archivo .env con los parametros de conexion. 

DB_HOST=localhost <br>
DB_USER=root <br>
DB_PASSWORD= <br>
DB_NAME=presupuesto-personal <br>

#### Activar el Backend

Al terminar, correr la linea de codgio node app.js o nodemon app.js. La API correra en el puerto 3000 ( http://localhost:3000 )

<br>

Para ingresar por primera vez ingresar admin@admin.com password admin / hay otra cuenta ingresada user@user.user / password user.

<br>