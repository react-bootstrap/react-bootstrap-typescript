// Import React
import React = require("react");

// <Tab />
// ----------------------------------------
export interface TabProps extends React.Props<TabClass> {
  animation?: boolean;
  className?: string;
  disabled?: boolean;
  eventKey?: any; // TODO: Add more specific type
  title?: any; // TODO: Add more specific type
}
export interface Tab extends React.ReactElement<TabProps> { }
export interface TabClass extends React.ComponentClass<TabProps> { }
export var Tab: TabClass;
