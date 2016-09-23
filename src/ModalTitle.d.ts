// Import React
import React = require("react");

// <Modal.Title/>
// ----------------------------------------
export interface ModalTitleProps extends React.Props<ModalTitleClass> {
  id?: string;
  className?: string;
  modalClassName?: string;
}
export interface ModalTitle extends React.ReactElement<ModalTitleProps> { }
export interface ModalTitleClass extends React.ComponentClass<ModalTitleProps> { }
