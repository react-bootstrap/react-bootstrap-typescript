// Import React
import React = require("react");

// <PageHeader />
// ----------------------------------------
export interface PageHeaderProps extends React.Props<PageHeaderClass> {
  className?: string;
}
export interface PageHeader extends React.ReactElement<PageHeaderProps> { }
export interface PageHeaderClass extends React.ComponentClass<PageHeaderProps> { }
export var PageHeader: PageHeaderClass;
