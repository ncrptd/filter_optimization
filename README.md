Modulo Filtered Data Table
This is a React web application that demonstrates a data table with filters based on modulo values. The application allows you to filter the data based on modulo values for each column and interactively updates other filters based on your selections.

Installation and Usage
Clone the repository: git clone 
Navigate to the project directory: cd modulo-filtered-data-table
Install dependencies: npm install
Run the development server: npm start
Open your browser and go to http://localhost:3000 to access the application.
Components and Structure
The application consists of the following components:

DataTable: Displays the data with pagination and scrolling functionality using the react-data-table-component package.

DropdownFilter: Renders dropdown filters for each column name with support for search and multi-select using the multiselect-react-dropdown package.

App: The main container component that manages the state and interactions between the DataTable and DropdownFilter components.

Filter ←→ Table Interaction
When you select values in a filter for a column, the DataTable updates to show only the rows that match the selected filter values.
Filter ←→ Filter Interaction
When you select values in a filter for a column A (e.g., modulo 3), the other columns (modulo 4, modulo 5, modulo 6) will update their drop-down options to show only relevant rows that have some overlap with the selected column in column A.
Column A will retain all the values, but only the selected ones will be checked.
For each filter X, the drop-down list will consider all other filters (except X) and use them to filter the data. It will then show only the unique values from the data in the drop-down options for X.
Libraries and Packages Used
react: A JavaScript library for building user interfaces.
react-data-table-component: A customizable and responsive data table component for React.
multiselect-react-dropdown: A simple and customizable multi-select dropdown component for React.
