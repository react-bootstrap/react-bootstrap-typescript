// Import React
import React = require("react");

// <CarouselItem />
// ----------------------------------------
export interface CarouselItemProps extends React.Props<CarouselItemClass> {
  active?: boolean;
  animtateIn?: boolean;
  animateOut?: boolean;
  caption?: any; // TODO: Add more specific type
  className?: string;
  direction?: string;
  index?: number;
  onAnimateOutEnd?: Function;
}
export interface CarouselItem extends React.ReactElement<CarouselItemProps> { }
export interface CarouselItemClass extends React.ComponentClass<CarouselItemProps> { }
export var CarouselItem: CarouselItemClass;
