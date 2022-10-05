import { describe, it, expect, vi } from 'vitest';
import { buildPageTitle, setPageTitle } from '../lib/page-title';

describe('buildPageTitle', async () => {
  const tests = [
    ['foo', undefined, 'foo'],
    ['foo', {}, 'foo'],
    ['foo', { prefix: 'DBZ -' }, 'DBZ - foo'],
    ['foo', { suffix: '- DBZ' }, 'foo - DBZ'],
    ['foo', { prefix: 'DBZ', separator: ' - '}, 'DBZ - foo'],
    ['foo', { separator: ' - ', suffix: 'DBZ' }, 'foo - DBZ'],
    ['', { suffix: 'DBZ', separator: ' - ' }, 'DBZ'],
    ['', { prefix: 'DBZ', separator: ' - ' }, 'DBZ'],
  ];

  it.each(tests)('buildPageTitle(%s, %o) -> %s', (a, b, expected) => {
    expect(buildPageTitle(a, b)).eq(expected);
  });
});

describe('setPageTitle', async () => {
  it.each([
    ['foo', undefined, 'foo'],
    ['foo', {}, 'foo'],
    ['foo', { prefix: 'DBZ -' }, 'DBZ - foo'],
    ['foo', { suffix: '- DBZ' }, 'foo - DBZ'],
  ])('setPageTitle(%s, %o) -> %s', (a, b, expected) => {
    setPageTitle(a, b);

    expect(document.title).toBe(expected);
  });

  it('empty call', () => {
    setPageTitle('Trunks');
    expect(document.title).toBe('Trunks');

    setPageTitle('');
    expect(document.title).toBe('');
  });

  it('setTitleMethod', () => {
    const setTitleMethod = vi.fn();

    setPageTitle('Bulma', {
      setTitleMethod,
      prefix: 'Capsule -',
      suffix: '- DBZ',
    });

    expect(setTitleMethod).toHaveBeenCalledTimes(1);
    expect(setTitleMethod).toHaveBeenCalledWith('Capsule - Bulma - DBZ');
  });
});
