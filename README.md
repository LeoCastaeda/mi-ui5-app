# 🕶️ Mi UI5 App — Demo SAP Fiori con MockServer y OData
Este proyecto es una **aplicación Fiori (OpenUI5)** desarrollada con **SAP UI5 CLI**, que simula un pequeño catálogo de productos utilizando un **MockServer local** con datos en formato **OData v2**. La app permite **listar productos**, **buscar por ID o nombre**, y **navegar a un detalle individual** con información del producto seleccionado.

## 🚀 Tecnologías utilizadas
- **SAP UI5 / OpenUI5**
- **UI5 CLI** (`@ui5/cli`)
- **JavaScript ES6**
- **OData v2 (MockServer)**
- **JSONModel**
- **Fiori Design Guidelines**
- **npm**

## 📂 Estructura del proyecto
```
mi-ui5-app/
├── webapp/
│   ├── controller/
│   │   ├── App.controller.js
│   │   └── Detail.controller.js
│   ├── localService/
│   │   ├── mockserver.js
│   │   ├── metadata.xml
│   │   └── mockdata/
│   │       └── Products.json
│   ├── view/
│   │   ├── App.view.xml
│   │   └── Detail.view.xml
│   ├── manifest.json
│   ├── Component.js
│   ├── index.html
│   └── i18n/
│       └── i18n.properties
├── package.json
└── ui5.yaml
```

## ⚙️ Instalación y ejecución
### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/<tu-usuario>/mi-ui5-app.git
cd mi-ui5-app
```
### 2️⃣ Instalar dependencias
```bash
npm install
```
Esto instalará `@ui5/cli` y todas las librerías necesarias de **OpenUI5**.

### 3️⃣ Ejecutar la aplicación
```bash
npm start
```
o directamente:
```bash
ui5 serve -o index.html
```
Esto iniciará un servidor local (por defecto en **http://localhost:8080/**) y abrirá automáticamente la app en el navegador.

## 🧩 Funcionalidades principales
| Funcionalidad | Descripción |
|----------------|-------------|
| 🔍 **Búsqueda dinámica** | Busca productos por ID o nombre. |
| 📋 **Tabla de productos** | Muestra la lista mockeada con ID, nombre y precio. |
| 📦 **MockServer OData** | Simula un backend OData con datos locales. |
| 📱 **Vista de detalle** | Muestra información individual del producto. |
| 🧠 **Arquitectura MVC** | Vistas, controladores y modelos claramente separados. |

## 🧠 Conceptos aprendidos
- Configurar un proyecto **UI5** desde cero.
- Uso del **MockServer** para simular datos **OData**.
- Implementar **data binding** y **routing**.
- Crear interfaces **Fiori** con controles `sap.m`.
- Aplicar la arquitectura **MVC** en SAP UI5.

## 🧪 Datos de ejemplo (mockdata)
Los datos de prueba se encuentran en `/webapp/localService/mockdata/Products.json`:
```json
[
  { "ID": 1, "Name": "Gafas Sol Andes", "Price": 199.9 },
  { "ID": 2, "Name": "Montura Lima Pro", "Price": 129.5 },
  { "ID": 3, "Name": "Lente Cusco X", "Price": 249.0 }
]
```

## 🌐 URL local
Después de ejecutar `ui5 serve`, accede a:
👉 [http://localhost:8080/index.html](http://localhost:8080/index.html)

## 🧰 Comandos útiles
| Comando | Descripción |
|----------|--------------|
| `npm install` | Instala las dependencias necesarias. |
| `ui5 build --all` | Construye la aplicación lista para despliegue. |
| `ui5 serve` | Inicia el servidor de desarrollo local. |
| `ui5 serve -o index.html` | Inicia y abre la app directamente. |

## 📘 Autor
**Leonardo Castañeda (Leo)**
Proyecto educativo desarrollado para aprender los fundamentos de **SAP Fiori** y **OpenUI5**, enfocado en **MockServer**, **OData** y **arquitectura MVC**.

## 🧭 Próximos pasos
- 🧩 Agregar formularios para crear y editar productos.
- 🗃️ Integrar un servicio OData real (**SAP BTP** o **CAP**).
- 🌍 Añadir soporte completo de **i18n**.
- 🧱 Publicar en **SAP Launchpad / Business Application Studio**.
