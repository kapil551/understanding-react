# React.js

1. What is Reat.js?

    - Open source library for building user interfaces.

    - Not a framework.

    - Focuse on UI.

    - Rich ecosystem.

2. Why learn React.js?

    - Created and maintained by Facebook.

    - Huge community.

    - In demand skillset.

    - Component Based Architecture

    - Component Reusable code.

    - React is declarative.

        - Tell React what you want and react will build the actual UI.
    
        - React will handle efficiently updating and rendering of the components.

        - DOM updates are handled gracefully in React.

    - Seamlessly integrate react into any of your application.

    - React Native for mobile applications.


3. Create React App:

    - https://reactjs.org/docs/create-a-new-react-app.html

4. React.js Project Folder Structure:

    - package.json:

        - This file contains the dependencies and the scripts required for the project.
    
    - node_modules folder:

        - This is the folder in which all the dependencies are installed.
    
    - public folder:

        - It contains the static files likes html, images, logo, svg etc.

    - src folder:

        - src/index.js

            - This file is the starting point of the react project.
        
        - src/App.js

            - This file is the root component specified insdie the index.js file.

            - It is responsible for the HTML displayed in the browser i.e. App.js represents the view which er see in the browser.

        - src/App.css

            - Styling for the App.js file.

        - src/index.css

            - Styling for the index.js file.

5. Components in react.js:

    - It describes the part of a react application.

    - They are re-usable and can be nested inside other components.

    - All the components come together to describe the whole react application.

    - Components Types:

        - ```Stateless Functional``` Components.

        - ```Stateful Class``` Components.
    
6. Functional Components:

    - It is a JavaScript function that can accept an input of properties(props) and returns HTML(JSX) that describes the UI.

7. Class Components:

    - They are basically ES6 classes, and similar to functional components a class component also can optionally recieve props as input and return HTML(JSX).

    - A class component can also maintain a private internal state.


8. Functional V/s Class components:

    - Functional component:

        - Simple functions

        - Use functional components as much as possible.

        - Absence of "this" keyword.

        - Solution with using state.

        - Mainly responsible for the UI.

        - Stateless/Dumb/Presentational
    
    - Class components:

        - More feature rich.

        - Maintain their own private data - state.

        - Complex UI logic.

        - Provide lifecycle methods.

        - Stateful/Smart/Container.

9. Introducing Hooks:

    - These are the new features that lets you use state and other react features like lifecycle methods without writing a class.

    - Hooks are introduced in functional components.

10. JSX:

    - JavaScript XML (JSX) - It is an extension to the JavaScript language syntax.

    - Write XML like code for elements and components.

    - JSX tags have a tag name, attributes, and children.

    - It makes your react code simpler and elegant.

    - It ultimately transpiles to pure JavaScript which is understood by the browser.

    - JSX differences:

        - class --> className

        - for --> htmlFor

        - camelCase property naming convention:

            - onclick --> onClick

            - tabindex --> tabIndex

    

