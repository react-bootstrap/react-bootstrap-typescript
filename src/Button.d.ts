import React = require("react");

// <Button />
// ----------------------------------------
export interface ButtonProps extends React.Props<ButtonClass>{

    // Optional
    active?: boolean;
    disabled?: boolean;
    block?: boolean;
    bsClass?: string;
    bsStyle?: string;
    bsSize?: string;
    className?: string;
    navItem?: boolean;
    navDropdown?: boolean;
    componentClass?: string;
    href?: string;
    onClick?: Function; // Add more specific type
    target?: string;
    type?: string;
}
export interface Button extends  React.ReactElement<ButtonProps> { }
export interface ButtonClass extends  React.ComponentClass<ButtonProps> { }

export var Button: ButtonClass;
