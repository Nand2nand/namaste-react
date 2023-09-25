import React from 'react';
import  ReactDOM from 'react-dom/client';
const parent  = React.createElement('h1',{},"hello");
//React element
const title =   (
<h1 className="heading">
    Namaste React using JSX
    </h1>
    );
// react functional component
const HeadingComponent = () => (
<div id="container">
   {title}
<h1>Namaste react functional component</h1>
</div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>)
