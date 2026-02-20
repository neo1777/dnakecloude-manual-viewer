// This utility resolves image paths.
// Images are served from the public/images directory.

export const getImageUrl = (filename: string): string => {
  // Use Vite's BASE_URL to correctly resolve assets on GitHub Pages
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${baseUrl}${filename}`;
};