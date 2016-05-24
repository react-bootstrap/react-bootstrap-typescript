// Import React
import React = require("react");

// <Panel />
// ----------------------------------------
export interface PanelProps extends React.Props<PanelClass> {
  className?: string;
  bsSize?: string;
  bsStyle?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  eventKey?: any;
  expanded?: boolean;
  footer?: any; // TODO: Add more specific type
  header?: any; // TODO: Add more specific type
  id?: string;
  onSelect?: Function; // TODO: Add more specific type
  onClick?: Function; // TODO: Add more specific type
}
export interface Panel extends React.ReactElement<PanelProps> { }
export interface PanelClass extends React.ComponentClass<PanelProps> { }
export var Panel: PanelClass;
