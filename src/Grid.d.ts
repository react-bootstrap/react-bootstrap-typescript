import React = require("react");

// <Grid />
// ----------------------------------------
export interface GridProps extends React.Props<GridClass> {
    className?: string;
    componentClass?: any; // TODO: Add more specific type
    fluid?: boolean;
}
export interface Grid extends React.ReactElement<GridProps> { }
export interface GridClass extends React.ComponentClass<GridProps> { }

export var Grid: GridClass;
