# Configuración Específica

Proyecto utilizando TypeScript.

Dependencias extras:

```
npm install react-bootstrap bootstrap -E
npm install vitest happy-dom @testing-library/react @testing-library/user-event -D
```

Modificar `vite.config.js` añadiendo a `defineConfig`:

```
test: {
    environment: 'happy-dom'
}
```

Modificar `package.json` añadiendo a `"scripts"`:

```
"test": "vitest"
```

Para ejecutar los tests se utiliza:

```
npm run test
```
