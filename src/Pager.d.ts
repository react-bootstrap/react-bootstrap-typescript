// Import React
import React = require("react");

// <Pager />
// ----------------------------------------
export interface PagerProps extends React.Props<PagerClass> {
  className?: string;
  onSelect?: Function;
}
export interface Pager extends React.ReactElement<PagerProps> { }
export interface PagerClass extends  React.ComponentClass<PagerProps> { }
export var Pager: PagerClass;
