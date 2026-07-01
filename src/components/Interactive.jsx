import { useState } from 'react';

// Mirrors the original site's `style-hover="{{ x }}"` behaviour: base style
// merged with an override object while the pointer is over the element.
export function Hoverable({ as: As = 'div', base = {}, hoverStyle = {}, style = {}, onMouseEnter, onMouseLeave, children, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <As
      {...rest}
      style={{ ...base, ...style, ...(hover ? hoverStyle : {}) }}
      onMouseEnter={(e) => { setHover(true); onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHover(false); onMouseLeave?.(e); }}
    >
      {children}
    </As>
  );
}

// Mirrors the original site's `style-focus="{{ x }}"` behaviour on form fields.
export function Focusable({ as: As = 'input', base = {}, focusStyle = {}, style = {}, onFocus, onBlur, children, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <As
      {...rest}
      style={{ ...base, ...style, ...(focus ? focusStyle : {}) }}
      onFocus={(e) => { setFocus(true); onFocus?.(e); }}
      onBlur={(e) => { setFocus(false); onBlur?.(e); }}
    >
      {children}
    </As>
  );
}
