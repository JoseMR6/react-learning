# Configuración Específica

Proyecto utilizando Javascript.

Dependencias extras:

```
npm install path-to-regexp -E
npm install vitest -D
```

Modificar `package.json` añadiendo a `"scripts"`:

```
"test": "vitest"
```

```
npm install happy-dom @testing-library/react -D
```

Modificar `vite.config.js` añadiendo a `defineConfig`:

```
test: {
    environment: 'happy-dom'
}
```

Para ejecutar los tests se utiliza:

```
npm run test
```
