import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ApiCall = () => {
    const [getData, setGetData] =  useState ([])

    
    /* ======================================== */
    /*  A function *getApi* is defined to handle the API call. This function is marked as ASYNC because it performs asynchronous operations using AXIOS. */
    /* ======================================== */
    
    /* ======================================== */
    /* *axios.get("https://fakestoreapi.com/products")* makes a GET request to the provided URL and returns a promise.

    *await* is used to wait for the response of the API call.
    Once the data is received, *response.data* contains the actual data from the API response.

    *setGetData(response.data)* updates the *getData* state with the fetched data.*/
    /* ======================================== */

    const getApi = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        setGetData(response.data)
    }


        /* ======================================== */
        /* The *useEffect* hook is used to perform side effects in the component. It runs the *getApi* function when the component is first rendered. 
        
        *getApi* is excuted, which triggers the API call and updates the state with the fetch data*/
        /* ======================================== */
    useEffect (() => {
        getApi();
    }, []);

    console.log(getData);

  return (
    <div>

        {/* ==========================================         Detailed Explanation  
         *{getData.map((myData) => (
             *getData* is an array of objects, each object containing details about an item (like id, title, price, and image).

             *map* is an array method that creates a new array by applying a  function to each element of the array.

            *myData* is the parameter representing the current element being processed in the array. 
        ========================================  */}

        {/* <Card key={myData.id}>
Card is likely a styled or custom React component that acts as a container for each item's details.
key={myData.id} assigns a unique key to each Card component, which is a requirement when rendering lists in React to help identify each item uniquely and optimize rendering performance.
Displaying the title:

jsx
Copy code
<p>
  <b> Title </b>: {myData.title}
</p>
A paragraph (<p>) element is used to display the title of the item.
The title is made bold using the <b> tag.
{myData.title} is a JSX expression that inserts the title property of the current myData object into the DOM.
Displaying the price:

jsx
Copy code
<p>
  <b>Price</b>: ${myData.price}
</p>
Similar to the title, a paragraph element displays the price of the item.
The price is prefixed with a dollar sign ($), and {myData.price} inserts the price value.
Displaying the image:

jsx
Copy code
<div>
  <img src={myData.image} alt="" />
</div>
An image (<img>) element displays the item's image.
The src attribute is set to the value of myData.image, which is the URL of the image.
The alt attribute is left empty but should ideally have a description for accessibility.
Creating a link to a detail page:

jsx
Copy code
<Link to={`/detail/${myData.id}`}>
  <button>View More</button>
</Link>
Link is a component from react-router-dom used for navigation.
to={/detail/${myData.id}} constructs a URL path to a detail page for the specific item.
${myData.id} dynamically inserts the item's id into the URL.
Inside the Link component, a button is rendered with the text "View More". When this button is clicked, it navigates to the detailed view of the item. */}

       {getData.map((myData) => (
            <Card key={myData.id}>
                <p>
                    <b>Title</b>: {myData.title}
                </p>
                <p>
                    <b>Price</b>: ${myData.price}
                </p>
                <div>
                    <img src={myData.image} alt="" />
                </div>
                <Link to={`/detail/${myData.id}`}>
                    <button>View More</button>
                </Link>
            </Card>
            ))}
    </div>
  )
}

export default ApiCall

const Card = styled.div`
    background-color: aliceblue;

    img {
        height: 200px;
        width: 200px;
        background-color: gray;
    }
`


// Summary
// The getData array is iterated over using map.
// For each item in the array, a Card component is created.
// Each Card displays the item's title, price, image, and a link to a detailed view of the item.
// Unique keys are assigned to each Card for efficient rendering.
// The Link component from react-router-dom is used for navigation to the item's detail page.
// This pattern is common in React for rendering lists of data, providing both a summary view and a link to more detailed information.