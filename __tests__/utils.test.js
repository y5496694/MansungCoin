import { formatCurrency, formatDate } from '../utils.js';

describe('formatCurrency', () => {
  test('formats number to KRW currency', () => {
    expect(formatCurrency(1000)).toBe('₩1,000');
  });

  test('formats negative amounts', () => {
    expect(formatCurrency(-500)).toBe('-₩500');
  });
});

describe('formatDate', () => {
  test('formats ISO string correctly', () => {
    const result = formatDate('2024-06-01T12:34:56Z');
    expect(result).toBe('2024-06-01 12:34');
  });

  test('returns placeholder for falsy values', () => {
    expect(formatDate(null)).toBe('날짜 정보 없음');
  });

  test('handles objects with toDate method', () => {
    const obj = { toDate: () => new Date('2024-06-01T00:00:00Z') };
    expect(formatDate(obj)).toBe('2024-06-01 00:00');
  });

  test('returns placeholder for invalid dates', () => {
    expect(formatDate(new Date(NaN))).toBe('날짜 정보 없음');
  });
});
