// Import React
import React = require("react");

// <Accordion />
// ----------------------------------------
export interface AccordionProps extends React.Props<AccordionClass> {
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
}
export interface Accordion extends React.ReactElement<AccordionProps> { }
export interface AccordionClass extends  React.ComponentClass<AccordionProps> { }
export var Accordion: AccordionClass;
