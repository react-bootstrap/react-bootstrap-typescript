// Import React
import React = require("react");

// <Modal.Header />
// ----------------------------------------
export interface ModalHeaderProps extends React.Props<ModalHeaderClass> {
  className?: string;
  closeButton?: boolean;
  modalClassName?: string;
  onHide?: Function;
  // undefined?: string;
}
export interface ModalHeader extends React.ReactElement<ModalHeaderProps> { }
export interface ModalHeaderClass extends React.ComponentClass<ModalHeaderProps> { }
