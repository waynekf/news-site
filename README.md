# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


THE PLAN
========
Basic structure of the site:

Data:
* Separate files for API interaction
* Use of contexts in preference to prop drilling in order to share data
* Use of Error Boundaries to better handle errors 

UI:
* Use React Suspend feature to enable better "loading" user feedback
* Leaving all css to the end as more interested in getting the functionality working

Layout Page
    Articles Page (uses List & Card Container components)
        Article Page
            => Article Component (uses Card Container component)
    Comments Page (uses List & Card Container components)
            => Comment Component (uses Card Container component)
                => Vote component
    Topics Page (uses List components)
            => Topic Component (uses Card Container component)

Generic Components:

Header
CONTENT
Footer
Card Container (to display a single entity of variable type)
List component (to display a list of entities of variable type)
