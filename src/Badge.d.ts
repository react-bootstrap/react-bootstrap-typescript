// Import React
import React = require("react");

// <Badge />
// ----------------------------------------
export interface BadgeProps extends React.Props<BadgeClass> {
  className?: string;
  pullRight?: boolean;
}
export interface Badge extends React.ReactElement<BadgeProps> { }
export interface BadgeClass extends React.ComponentClass<BadgeProps> { }
export var Badge: BadgeClass;
