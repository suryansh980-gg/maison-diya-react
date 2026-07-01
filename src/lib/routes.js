// Maps the original static filenames to the SPA's client-side routes.
const MAP = {
  'Maison Diya.html': '/',
  'Maison%20Diya.html': '/',
  'Products.html': '/products',
  'Story.html': '/story',
  'Contact.html': '/contact',
};

export function toRoute(href) {
  return MAP[href] ?? href;
}
