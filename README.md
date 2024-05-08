1. Create Dummy Products JSON File:
 Create a JSON file named products.json containing dummy product data. Each
product should have an id, name, price, and description.

1. Frontend Setup:
 Use create-react-app to set up a new React application named &quot;shopping-cart&quot;.
 Install Redux and React-Redux packages using npm.

1. Redux Setup:
 Set up Redux store, actions, and reducers.
 Create an action creator function named addToCart to add a product to the cart.

1. Product Listing Page:
 Create a component named ProductList to display the list of products fetched from the
JSON file.

 Use Redux hooks (useSelector and useDispatch) to access the Redux store and
dispatch actions.

1. Add to Cart Functionality:
 Implement the &quot;Add to Cart&quot; button functionality in the ProductList component.
 When a user clicks the &quot;Add to Cart&quot; button for a product, it should dispatch
the addToCart action with the selected product as payload.

1. Cart Component:
 Create a component named Cart to display the items added to the cart.
 Use Redux hooks (useSelector) to retrieve the cart items from the Redux store.

1. Checkout Page with Cart Counter:
 Create a checkout page that includes the Cart component.
 Implement a cart counter that displays the total number of items in the cart.