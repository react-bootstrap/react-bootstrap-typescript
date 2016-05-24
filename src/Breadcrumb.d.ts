// Import React
import React = require("react");

// <Breadcrumb />
// ----------------------------------------
export interface BreadcrumbProps extends React.Props<BreadcrumbClass> {
  className?: string;
}
export interface Breadcrumb extends React.ReactElement<BreadcrumbProps> { }
export interface BreadcrumbClass extends React.ComponentClass<BreadcrumbProps> { }
export var Breadcrumb: BreadcrumbClass;
