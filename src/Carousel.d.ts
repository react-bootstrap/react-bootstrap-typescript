// Import React
import React = require("react");

// <Carousel />
// ----------------------------------------
export interface CarouselProps extends React.Props<CarouselClass> {
  activeIndex?: number;
  bsSize?: string;
  bsStyle?: string;
  className?: string;
  controls?: boolean;
  defaultActiveIndex?: number;
  direction?: string;
  indicators?: boolean;
  interval?: number;
  nextIcon?: any; // TODO: Add more specific type
  onSelect?: Function;
  onSlideEnd?: Function;
  pauseOnHover?: boolean;
  prevIcon?: any; // TODO: Add more specific type
  slide?: boolean;
  wrap?: boolean;
}
export interface Carousel extends React.ReactElement<CarouselProps> { }
export interface CarouselClass extends React.ComponentClass<CarouselProps> { }
export var Carousel: CarouselClass;
