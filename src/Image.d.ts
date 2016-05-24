// Import React
import React = require("react");

// <Image />
// ----------------------------------------
export interface ImageProps extends React.Props<ImageClass> {

  // Optional
  circle?: boolean;
  responsive?: boolean;
  rounded?: boolean;
  thumbnail?: boolean;
  src?: string;
}
export interface Image extends React.ReactElement<ImageProps> {}
export interface ImageClass extends React.ComponentClass<ImageProps> {}
export var Image:ImageClass;
