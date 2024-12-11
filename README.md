# react-learning

Proyectos de aprendizaje de cursos de React.

## Configuración

Inicializar NPM en la carpeta raíz del proyecto:

```
npm init -y
```

Instalar esLint para corrección de código y que sea más correcto (puede hacerse en la carpeta de código del proyecto). En este caso se instala en la carpeta raíz de todos los mini proyectos para que afecte a todos.

```
npm install standard -D
```

EsLint Requiere actualizar `package.json` de la raíz añadiendo lo siguiente y tener extensión de esLint en Visual Studio:

```
"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
}
```

Crear carpeta de los proyectos del curso y posicionarse en ella para crear proyectos con Vite:

```
mkdir projects
cd projects/
```

Crear proyecto nuevo con Vite seleccionando las opciones elegidas:

```
npm create vite@latest
nombre-proyecto
React
JavaScript + SWC
```

Instalar las dependencias del proyecto:

```
cd nombre-proyecto/
npm install
```

Iniciar el servidor local, posicionado en la carpeta del código del proyecto, para poder acceder al proyecto en el navegador:

```
npm run dev
```

