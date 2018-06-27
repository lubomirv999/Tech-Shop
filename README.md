# Tech-Shop
Tech Shop is my individual project for ReactJS Fundamentals - June 2018

The Application is implemented with Kinvey and ReactJS

## General Requirements
#### Tech Shop application should use the following technologies, frameworks and development techniques:
* At least 3 different dynamic pages
* Use React.js for the client-side
* Communicate to a remote service (via REST, sockets, GraphQL, or a similar client-server technique)
* Implement authentication and user roles
* Implement client-side routing
* Demonstrate use of programming concepts, specific to the React library: stateless and statefull components, bound forms, synthetic events, etc.
* Brief documentation on the project and project architecture (as .md file)

## Additional requirements
* Apply error handling and data validation to avoid crashes when invalid data is entered
* Prevent security exploits (XSS, XSRF, Parameter Tampering, etc.)
* Handle correctly special HTML characters and tags
* Source control - Github
* Use responsive design
* Nice looking UI, supporting of all modern and old Web browsers
* Good usability
* Use a state management library like Flux or Redux
* Deploy the application in a cloud environment
* Use a file storage cloud API, e.g. Dropbox, Google Drive or other for storing the files
* Connect to an external API, like Google Maps, AccuWeather, etc.
* Use of features of HTML 5 like Geolocation, Local Storage, SVG, Canvas, etc.
* Anything that is not described in the assignment is a bonus if it has some practical use

## The application should have:
* Public part (accessible without authentication)
* Private part (available for registered users)
* Administrative part (available for administrators only)

## Database Structure And Logic
### Tables

#### Product
* Id, Title, Description, Price, AuthorId, imageUrl

#### Review
* Id, Title, Content, UserId, ProductId

#### Order
* Id, CreatedOn, TotalPrice, UserId, ProductId 

## Business Logic of the application
### Three types of users:
* Anonymous (not registered and not logged in user)
* Logged in users
* Administrator

### Logged in users are able to
* Create product for sale (Full CRUD on it)
* Create review for a product (Full CRUD on it)
* Buy product
* See their cart
* Make an order

### Administrators are able to
* See Admin panel - Can delete all users and products

### Deadline
* Project should be completed before 15 July 2018
