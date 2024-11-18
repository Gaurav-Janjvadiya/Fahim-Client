

---

# React + Vite

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some basic ESLint configurations for linting.

## Features

- **Fast Refresh**: Powered by Vite, which allows for fast development builds and efficient hot-reloading.
- **ESLint Integration**: Pre-configured with ESLint to maintain code quality and consistency.
- **React Setup**: Pre-configured React setup to quickly start building your app.

## Official Plugins

Currently, there are two official plugins available for React in Vite, both of which enable Fast Refresh during development:

### 1. **@vitejs/plugin-react** 

This plugin uses [Babel](https://babeljs.io/) for Fast Refresh. It is the default option for most React projects. 

#### Installation:

```bash
npm install @vitejs/plugin-react --save-dev
```

#### Documentation:
- [Plugin README](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)

### 2. **@vitejs/plugin-react-swc** 

This plugin uses [SWC](https://swc.rs/) for Fast Refresh. It can offer improved build performance compared to Babel, especially for larger projects.

#### Installation:

```bash
npm install @vitejs/plugin-react-swc --save-dev
```

#### Documentation:
- [Plugin README](https://github.com/vitejs/vite-plugin-react-swc)

## Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/react-vite-template.git
   cd react-vite-template
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ESLint Configuration

This template includes a basic ESLint setup to ensure clean code and maintainability. You can customize the ESLint rules as per your project requirements.

To lint your code:

```bash
npm run lint
```

To auto-fix linting issues (if applicable):

```bash
npm run lint -- --fix
```

## Additional Setup

- For production builds, you can build the app using:
  ```bash
  npm run build
  ```

- To preview the production build locally:
  ```bash
  npm run preview
  ```

## Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/)

---

