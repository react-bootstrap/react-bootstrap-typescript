// Import React
import React = require("react");

// <Modal.Footer />
// ----------------------------------------
export interface ModalFooterProps extends React.Props<ModalFooterClass> {
  className?: string;
  modalClassName?: string;
}
export interface ModalFooter extends React.ReactElement<ModalFooterProps> { }
export interface ModalFooterClass extends React.ComponentClass<ModalFooterProps> { }
