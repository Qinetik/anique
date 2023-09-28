- HOC must use validStylesProp to give a styles attribute with CSSProperties received from the user ensuring
  - If user didn't pass any styles, styles attribute is avoided
  - If user passed null as a style its not applied

- HOC component shouldn't use `div` or any html element, instead it should use `AS` with `ASProps` ensuring
  - User's as prop can be propagated and underling html element can be altered by the user

