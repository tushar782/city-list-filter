<!-- City List Filter Application -->


<!-- This is a simple React application that allows users to filter a list of cities. The app uses Redux for state management, and it features components like a search bar and an item list for displaying filtered cities. -->

<!-- Features -->

<!-- Filter Cities: The user can type in a search bar to filter the list of cities. -->

<!-- Redux State Management: The city list is managed using Redux, providing global state across the application. -->


Before running this application, make sure you have the following installed:

Node.js (version 14.x or higher)

npm or yarn

Installation and Setup

Follow the steps below to get the app running on your local machine:

 <!-- Clone the Repository -->

git clone https://github.com/tushar782/city-list-filter.git



 <!-- Navigate to the Project Directory -->


cd city-list-filter


 <!-- Install Dependencies -->

You can use npm or yarn to install the project dependencies:

npm install

npm start

Run the Application

Once the dependencies are installed, you can start the development server:




<!-- This will run the app in development mode. Open http://localhost:3000 in your browser to view the app. -->

<!-- The page will automatically reload if you make changes to the code. You will also see any lint errors in the console. -->



The project uses React 18's createRoot for rendering components.

The Redux store is provided to the application using react-redux's Provider component, making it available to all components in the app.

The app uses functional components and hooks (such as useDispatch and useSelector) to interact with Redux.