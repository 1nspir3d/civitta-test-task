import { formatCurrency } from "../utils/formatCurrency";

describe('formatCurrency()', () => {
  it('should format NGN currency properly', () => {
    const result = formatCurrency(12000, 'en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
    });

    expect(result.formattedValue).toBe('₦12,000.00');
    expect(result.sign).toBe('₦');
  });

  it('should format negative USD correctly', () => {
    const result = formatCurrency(-1000, 'en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });

    expect(result.formattedValue).toBe('-$1,000');
    expect(result.sign).toBe('-');
  });
});
