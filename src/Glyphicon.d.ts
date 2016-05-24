// Import React
import React = require("react");

// <Glyphicon />
// ----------------------------------------
export interface GlyphiconProps extends React.Props<GlyphiconClass> {
  className?: string;
  // Required
  glyph: string;
}
export interface Glyphicon extends React.ReactElement<GlyphiconProps> { }
export interface GlyphiconClass extends React.ComponentClass<GlyphiconProps> { }
export var Glyphicon: GlyphiconClass;
