# Configuración Específica

Proyecto utilizando Javascript. Configurando dependencias de React de forma manual:

```
npm create vite@latest
nombre-proyecto
Vanilla
JavaScript
cd nombre-proyecto/
npm install @vitejs/plugin-react -E 
npm install react react-dom -E
```

Utilizando este método hay que crear o cambiar los ficheros creados por defecto siguientes:

```
vite.config.js
main.jsx
index.html
```

Dependencias extras:

```
npm init playwright@latest
```

Esta dependencia sirve para testear, requiere cambiar la extensión del fichero `playwright.config.js` a `cjs` y adaptar el test de ejemplo para utilizar import en lugar de require.

Para ejecutar los tests se ejecuta:

```
npx playwright test
```
