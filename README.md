PostsListThunk is a project created to practice using the Redux Toolkit and its createAsyncThunk function to implement asynchronous queries in a React application. This project implemented the output of three types of data (users, posts, and comments) from the JSONPlaceholder test API, which allows you to understand how to work with asynchronous operations in Redux and React.

The project uses React, which is the main library for building the user interface. Redux Toolkit is used for state management, which greatly simplifies the process of working with global state and asynchronous requests thanks to functions such as createSlice and createAsyncThunk. These tools help in separating the logic of working with data from components, keeping the code clean and maintainable. Instead of the standard methods for asynchronous operations in Redux, createAsyncThunk allows you to describe asynchronous requests more declaratively, which reduces code complexity.

To interact with the API, we used Axios, a popular library for making HTTP requests that conveniently handles responses and errors. In addition, the project also includes the use of React-Redux to integrate Redux with React components, which allows for efficient state transfer and updating between components. The application is deployed using gh-pages, which allows you to quickly publish a React application to GitHub Pages.

The project helped me learn important concepts of managing asynchronous requests in Redux, particularly using createAsyncThunk to load data from an external API. One of the main tasks was to correctly configure the handling of different stages of an asynchronous request - waiting, success, and errors - and to correctly update the state in Redux depending on the result.

The project also provides experience in setting up a connection between different React components through the global state of Redux, where it is important to use the useSelector and useDispatch hooks correctly to access and update the state. An important aspect was to dynamically change the data output depending on the selected type (posts, users, or comments) and provide asynchronous access to this data via Redux.

Additionally, the project provided valuable practice in using Tailwind CSS for styling the user interface. Tailwind's utility-first approach allowed me to quickly and efficiently style components without writing custom CSS, helping to keep the styling consistent and maintainable throughout the project.

Thus, this project became great practice for working with Redux in real-world conditions, including mastering asynchronous request management, error handling, configuring the frontend with global state via Redux, and applying utility-first styling with Tailwind CSS.

App link: [https://pro-100evhen.github.io/PostsListThunk/](https://pro-100evhen.github.io/PostsListThunk/)
