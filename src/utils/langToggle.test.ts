import { describe, it, expect } from 'vitest';
import { getLangToggleUrl } from './langToggle';

describe('Language Toggle Utility', () => {
  describe('Switch to Dutch (NL)', () => {
    it('should add /nl prefix to EN homepage', () => {
      expect(getLangToggleUrl('/', 'nl')).toBe('/nl/');
    });

    it('should add /nl prefix to EN post page', () => {
      expect(getLangToggleUrl('/posts/copilot-three-layers', 'nl')).toBe(
        '/nl/posts/copilot-three-layers'
      );
    });

    it('should add /nl prefix to EN about page', () => {
      expect(getLangToggleUrl('/about', 'nl')).toBe('/nl/about');
    });

    it('should return current path if already Dutch', () => {
      expect(getLangToggleUrl('/nl/', 'nl')).toBe('/nl/');
      expect(getLangToggleUrl('/nl/posts/copilot-drie-lagen', 'nl')).toBe(
        '/nl/posts/copilot-drie-lagen'
      );
    });
  });

  describe('Switch to English (EN)', () => {
    it('should remove /nl prefix from NL homepage', () => {
      expect(getLangToggleUrl('/nl/', 'en')).toBe('/');
    });

    it('should remove /nl prefix from NL post page', () => {
      expect(getLangToggleUrl('/nl/posts/copilot-drie-lagen', 'en')).toBe(
        '/posts/copilot-drie-lagen'
      );
    });

    it('should remove /nl prefix from NL about page', () => {
      expect(getLangToggleUrl('/nl/about', 'en')).toBe('/about');
    });

    it('should return current path if already English', () => {
      expect(getLangToggleUrl('/', 'en')).toBe('/');
      expect(getLangToggleUrl('/posts/copilot-three-layers', 'en')).toBe(
        '/posts/copilot-three-layers'
      );
    });
  });

  describe('Edge cases', () => {
    it('should handle /nl root correctly', () => {
      expect(getLangToggleUrl('/nl', 'en')).toBe('/');
    });

    it('should handle nested post slugs', () => {
      expect(getLangToggleUrl('/posts/long-slug-with-dashes', 'nl')).toBe(
        '/nl/posts/long-slug-with-dashes'
      );
      expect(getLangToggleUrl('/nl/posts/long-slug-with-dashes', 'en')).toBe(
        '/posts/long-slug-with-dashes'
      );
    });
  });
});
