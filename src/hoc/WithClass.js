import React from "react";

//Component Just to Add ClassName to Component

const withClass = props => (
    <div className={props.className}>
        {props.children}
    </div>
);

export default withClass;