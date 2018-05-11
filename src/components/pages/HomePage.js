import React from 'react';
import {Link} from 'react-router-dom'
const Homepage = (props) => (
   <div>
     <h1> HomePage </h1>
     <Link to = '/login'> Login </Link>
     <Link to = '/register'> Register </Link>
   </div>
);

export default Homepage;
