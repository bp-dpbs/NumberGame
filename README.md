We are building an SPA that contains two pages:
1. Home Page with a link to Game Page.
2. Game Page that displays:
    i) Average
    ii) Maximum Number
   from an array of numbers returned from an API.

Steps to follow:
1. Clone the Repository - https://github.com/my-fun-projects/NumberGame
2. Run the application.
3. Rectify implementation of Routing in Navbar so that we have two links. First to navigate to Home Page and the second to go to Game Page. Please note that the app should be SPA.
4. Call Number API when page loads (NumberPanel) and when the button on NumberPanel page is clicked.
5. Show an indicator (Spinner/Text) to let the user know if the new values are more than or less than previous values.
6. The Number API takes a couple of seconds to return data. So, inform the user that data is being laoded till the API returns data. You can choose to show Spinner/Text for the same.
7. During the above wait time, numbers should not be displayed. Only the Spinner/Text should be displayed.