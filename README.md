# Parcial 1 programacion con tecnologias web
Para correr este repositorio se deben ejecutar los siguientes comandos desde la terminal en la carpeta del repositorio
 ```bash
npm install
npm start
```
Despues de esto ya deberia estar corriendo el servidor web del proyecto de React en el puerto 3000
La pagina inicial del proyecto esta en:
http://localhost:3000/
## Login
En esta esta una vista de login donde se verifica la validez del correo y contraseña basado en su validez.
Para el correo se usa regex para validar que cumpla el patronde un correo, de lo contrario se envia una alerta al usuario
Para la contraseña simplemente se revisa que su longitud sea igual a 8, de lo contrario se envia una alerta al usuario
![image](https://github.com/user-attachments/assets/606afb02-38de-4c31-a29d-d500d1561b99)
Una vez se ingresan los datos que cumplan se utiliza "react-router-dom" para redigir a la ruta correspondiente al "Home" que es de lejos el componente más complejo de la aplicación.
## Home
Home en español:
![image](https://github.com/user-attachments/assets/7f366494-c9d0-4d47-934e-2e2b735a0bc3)
Home en ingles:
![image](https://github.com/user-attachments/assets/63d30d0e-c29c-40e2-8cfe-3317205a3531)
![image](https://github.com/user-attachments/assets/32b838cd-eca7-4580-a75a-c496d16f9b48)
Se utiliza un API de mockaroo para generar los datos del usuario que se piden dentro de un useEffect y se actualizan con useState, pero mientras se espera a que se recuperen los valores predeterminados son "loading..."
Los datos de las tarjetas se generan aleatoriamente (distancia y longitud) de manera local.
Se definen los 3 tipos de tarjeta que hay para las 3 grandes columnas ciclismo, correr y nadar y en estas se pusieron los datos que se repiten entre todos las tarjetas (tipo de tarjeta, titulo, descripcion e imagen)
La pagina consiste de 1 fila con 3 columnas que corresponden a los tipos de actividad (ciclismo, correr y nadar) y estas son generadas dinamicamente en base a los tipos definidos anteriormente
Luego, por cada fila de una columna, se generan 2 columnas con una tarjeta de sesión generada en cada una (hay 5 filas en una columna de tipo de actividad y 2 columnas por cada fila, para un total de 10 tarjetas).
Cada tarjeta tiene la funcionalidad de abrir un Modal con una replica de la tarjeta dentro.
## Footer
![image](https://github.com/user-attachments/assets/ecf485a2-a1fa-4eae-b3db-327ca95cc209)
Finalmente esta el footer del usuario que contiene la informacion obtenida anteriormente con el useEffect (su imagen de perfil, su nombre completo y sus mejores tiempos) con iconos generados en svg para facilitar su uso

Toda la pagina web ha sido internacionalizada utilizando i18 sobre los textos estaticos.
