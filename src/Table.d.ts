// Import React
import React = require("react");

// <Table />
// ----------------------------------------
export interface TableProps extends React.Props<TableClass> {
  bordered?: boolean;
  className?: string;
  condensed?: boolean;
  hover?: boolean;
  responsive?: boolean;
  striped?: boolean;
}
export interface Table extends React.ReactElement<TableProps> { }
export interface TableClass extends React.ComponentClass<TableProps> { }
export var Table: TableClass;
