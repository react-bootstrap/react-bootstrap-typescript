// Import React
import React = require("react");

// <BreadcrumbItem />
// ----------------------------------------
export interface BreadcrumbItemProps extends React.Props<BreadcrumbItemClass> {
  className?: string;
  href?: string;
  title?: string;
  active?: boolean;
  id?: string|number;
  linkId?: string|number;
  target?: string;
}
export interface BreadcrumbItem extends React.ReactElement<BreadcrumbItemProps> { }
export interface BreadcrumbItemClass extends React.ComponentClass<BreadcrumbItemProps> { }
export var BreadcrumbItem: BreadcrumbItemClass;
