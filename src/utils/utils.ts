import { Children, isValidElement, ReactNode } from 'react';

/**
 * transform the children array to a string
 * @param children
 * @returns
 */
export const childrenToString = (children: ReactNode): string => {
  if (!children) return ''; // Return empty string if no children
  // Using React.Children to map over the children
  const array = Children.map(children, (child) => {
    if (!child) return ''; // Return empty string if the child is null or undefined
    // Convert the child to string by checking the type
    if (isValidElement(child)) {
      // For React elements, convert them back to their string representation
      return child.props.children ? childrenToString(child.props.children) : '';
    }
    return child; // Return strings, numbers, etc. directly
  }) || [];

  return array.join(''); // Join all parts into a single string
};
