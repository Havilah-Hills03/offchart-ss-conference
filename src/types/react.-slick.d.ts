declare module 'react-slick' {
  import * as React from 'react';

  interface Settings {
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    dots?: boolean;
    draggable?: boolean;
    fade?: boolean;
    infinite?: boolean;
    initialSlide?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    speed?: number;
    centerMode?: boolean;
    centerPadding?: string;
    pauseOnHover?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<Settings>;
    }>;
    [key: string]: unknown;
  }

  export default class Slider extends React.Component<Settings> {}
}
