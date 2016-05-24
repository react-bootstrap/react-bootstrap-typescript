import React = require("react");

// <Row />
// ----------------------------------------
export interface RowProps extends React.Props<RowClass> {
    className?: string;
    componentClass?: any; // TODO: Add more specific type
}
export interface Row extends React.ReactElement<RowProps> { }
export interface RowClass extends React.ComponentClass<RowProps> { }
export var Row: RowClass;
