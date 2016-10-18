import React from 'react';

const MyLink = (props) => (
    <button onClick={() => console.log(props.href)}>{props.children}</button>
);

export default MyLink;