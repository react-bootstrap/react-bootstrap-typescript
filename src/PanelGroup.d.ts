// Import React
import React = require("react");

// <PanelGroup />
// ----------------------------------------
export interface PanelGroupProps extends React.Props<PanelGroupClass> {
  accordion?: boolean;
  activeKey?: any;
  bsSize?: string;
  bsStyle?: string;
  className?: string;
  defaultActiveKey?: any;
  onSelect?: Function;
}
export interface PanelGroup extends React.ReactElement<PanelGroupProps> { }
export interface PanelGroupClass extends  React.ComponentClass<PanelGroupProps> { }
export var PanelGroup: PanelGroupClass;
