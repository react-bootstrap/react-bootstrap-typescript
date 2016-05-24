// Import React
import React = require("react");

// <Tabs />
// ----------------------------------------
export interface TabsProps extends React.Props<TabsClass> {
  activeKey?: any;
  animation?: boolean;
  bsStyle?: string;
  defaultActiveKey?: any;
  id?: string | number;
  onSelect?: Function;
  paneWidth?: any; // TODO: Add more specific type
  position?: string;
  tabWidth?: any; // TODO: Add more specific type
}
export interface Tabs extends React.ReactElement<TabsProps> { }
export interface TabsClass extends React.ComponentClass<TabsProps> { }
export var Tabs: TabsClass;
