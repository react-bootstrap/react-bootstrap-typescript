// Import React
import React = require("react");

import {ModalHeaderClass} from './ModalHeader';
import {ModalTitleClass} from './ModalTitle';
import {ModalBodyClass} from './ModalBody';
import {ModalFooterClass} from './ModalFooter';
import {ModalDialogClass} from './ModalDialog';

// <Modal />
// ----------------------------------------
export interface ModalProps extends React.Props<ModalClass> {
  // Required
  onHide: Function;

  // Optional
  animation?: boolean;
  autoFocus?: boolean;
  backdrop?: boolean|string;
  bsSize?: string;
  container?: any; // TODO: Add more specific type
  dialogClassName?: string;
  dialogComponent?: any; // TODO: Add more specific type
  enforceFocus?: boolean;
  keyboard?: boolean;
  show?: boolean;

  onEnter?: Function;
  onEntering?: Function;
  onEntered?: Function;
  onExit?: Function;
  onExiting?: Function;
  onExited?: Function;
}
export interface Modal extends React.ReactElement<ModalProps> { }
export interface ModalClass extends React.ComponentClass<ModalProps> {
  Header: ModalHeaderClass;
  Title: ModalTitleClass;
  Body: ModalBodyClass;
  Footer: ModalFooterClass;
  Dialog: ModalDialogClass;
}
export var Modal: ModalClass;
