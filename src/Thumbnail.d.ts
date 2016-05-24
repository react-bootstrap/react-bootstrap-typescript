// Import React
import React = require("react");

// <Thumbnail />
// ----------------------------------------
export interface ThumbnailProps extends React.Props<ThumbnailClass> {
  alt?: string;
  bsSize?: string;
  bsStyle?: string;
  className?: string;
  href?: string;
  src?: string;
}
export interface Thumbnail extends React.ReactElement<ThumbnailProps> { }
export interface ThumbnailClass extends React.ComponentClass<ThumbnailProps> { }
export var Thumbnail: ThumbnailClass;
