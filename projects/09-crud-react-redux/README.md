# Configuración Específica

Proyecto utilizando TypeScript.

Dependencias extras:

```
npm add @tremor/react -E
npm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Modificar `tailwind.config.js`:

```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // path tremor node_modules
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}"
]
```

```
npm install @reduxjs/toolkit react-redux -E
npm install sonner -E
```
