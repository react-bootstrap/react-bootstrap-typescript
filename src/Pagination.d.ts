// Import React
import React = require("react");

// <Pagination />
// ----------------------------------------
export interface PaginationProps extends React.Props<PaginationClass> {
  activePage?: number;
  bsSize?: string;
  bsStyle?: string;
  buttonComponentClass?: any; // TODO: Add more specific type
  className?: string;
  ellipsis?: boolean;
  first?: boolean;
  items?: number;
  last?: boolean;
  maxButtons?: number;
  next?: boolean;
  onSelect?: Function;
  prev?: boolean;
}
export interface Pagination extends React.ReactElement<PaginationProps> { }
export interface PaginationClass extends React.ComponentClass<PaginationProps> { }
export var Pagination: PaginationClass;
