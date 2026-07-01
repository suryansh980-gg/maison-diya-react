// Converts an inline CSS string ("color:red;font-size:12px") into a React style object.
//
// The `border` shorthand is expanded into borderWidth/borderStyle/borderColor.
// React warns (and drops the value) when a later render mixes the `border`
// shorthand with a longhand `borderColor` override — which happens whenever a
// Hoverable's hoverStyle only overrides borderColor. Expanding up front avoids it.
export function s(cssText) {
  const out = {};
  if (!cssText) return out;
  for (const rule of cssText.split(';')) {
    const i = rule.indexOf(':');
    if (i === -1) continue;
    const prop = rule.slice(0, i).trim();
    const val = rule.slice(i + 1).trim();
    if (!prop || !val) continue;

    if (prop === 'border') {
      if (val === 'none') {
        out.borderStyle = 'none';
        continue;
      }
      const [width, style, ...rest] = val.split(/\s+/);
      if (width) out.borderWidth = width;
      if (style) out.borderStyle = style;
      if (rest.length) out.borderColor = rest.join(' ');
      continue;
    }

    const camel = prop.startsWith('--')
      ? prop
      : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[camel] = val;
  }
  return out;
}
