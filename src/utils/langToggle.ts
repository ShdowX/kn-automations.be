/**
 * Language toggle utility — generates the target URL when switching languages
 */
export function getLangToggleUrl(currentPath: string, targetLang: 'en' | 'nl'): string {
  if (targetLang === 'nl') {
    // Switch to Dutch: add /nl prefix (unless already on /nl/)
    if (currentPath.startsWith('/nl/') || currentPath === '/nl') {
      return currentPath; // Already Dutch
    }
    return '/nl' + (currentPath === '/' ? '/' : currentPath);
  } else {
    // Switch to English: remove /nl prefix
    if (currentPath.startsWith('/nl/') || currentPath === '/nl') {
      return currentPath.replace(/^\/nl/, '') || '/';
    }
    return currentPath; // Already English
  }
}
