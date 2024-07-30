# React + TypeScript + Vite + Zustand + TailwindCSS + ReactRouterDom

Este es un cascarón de proyecto, siéntete libre de usarlo para tus proyectos.

<img src="https://github.com/Klerith/zustand-mini-curso/blob/main/public/screenshot.png?raw=true" alt="Dashboard Screenshot">

## Lógica del Auth en el Servicio

1. Se define la interfaz de `AuthStatus`.
2. Se define la interfaz de `User`.
3. Se crea el Store de Auth en Zustand.
4. Se agrega Axios y se crea una base en Api.
5. Se crea un servicio para manejar el login usando una clase.
6. Se agrega el Hook de Zustand en la página de Login.
7. Dentro del storage de Zustand se está usando el servicio de login.
8. Verificar el estado usando el `check-status` del servicio.
9. Se agrega el token en el interceptor de la request para confirmar que sigue válido.
