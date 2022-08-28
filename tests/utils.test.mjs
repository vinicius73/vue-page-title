import { describe, it, expect } from 'vitest'
import { isFunction, safeString } from '../lib/utils'

describe('isFunction', async () => {
  const tests = [
    [() => { }, true],
    [function () { }, true],
    [function foo() { }, true],
    [new Function('return true'), true],
    [({ foo() { } }).foo, true],
    [undefined, false],
    [null, false],
    ["", false],
    [true, false],
    [false, false],
  ]

  it.each(tests)('isFunction(%s) -> %s', (input, expected) => {
    expect(isFunction(input)).toBe(expected)
  })
})

describe('safeString', () => {
  const tests = [
    ['foo', 'foo'],
    [null, ''],
    [false, ''],
    [undefined, ''],
  ]

  it.each(tests)('safeString(%s) -> %s', (input, expected) => {
    expect(safeString(input)).toBe(expected)
  })
})