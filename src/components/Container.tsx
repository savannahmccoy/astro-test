import React, { type ReactNode, type Ref } from 'react';
import { dcnb } from 'cnbuilder';

// Define the prop types for the Container component
interface ContainerProps {
  className?: string;
  element?: string;
  width?: 'full' | 'screen' | 'site';
  children?: ReactNode;
  ref?: Ref<any>;
}

/**
 * Container component with width and HTML element options.
 *
 */
const Container: React.FC<ContainerProps> = ({
  className,
  element,
  width,
  children,
  ref,
  ...props
}) => {
  
  /**
   * Available HTML elements of the container.
   */
  const containerElements = [
    'div',
    'section',
    'article',
    'main',
    'footer',
    'aside',
    'header',
    'nav',
    'form',
  ];

  /**
   * Widths of the container.
   */
  const containerWidths = ['full', 'screen', 'site'];

  let Element = 'div';

  if (element && containerElements.includes(element)) {
    Element = element;
  }

  let containerWidth = ""
  if (width && containerWidths.includes(width)) {
    switch (width) {
      case 'full':
        containerWidth = 'full'; // width: 100%
        break;

      case 'screen':
        containerWidth = 'screen'; // width: 100vw
        break;

      case 'site':
        containerWidth = 'cc';
        break;

      default:
      // none.
    }
  }

  return (
    React.createElement(
      Element,
      {
        className: dcnb(containerWidth, className),
        ...props,
      },
      children
    )
  );
};

export default Container;
