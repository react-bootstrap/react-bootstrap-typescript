// Import React
import React = require("react");

// <Modal.Body />
// ----------------------------------------
export interface ModalBodyProps extends React.Props<ModalBodyClass> {
  className?: string;
  modalClassName?: string;
}
export interface ModalBody extends React.ReactElement<ModalBodyProps> { }
export interface ModalBodyClass extends React.ComponentClass<ModalBodyProps> { }
