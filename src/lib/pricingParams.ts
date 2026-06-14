export const PIX_DISCOUNT_RATE = 0.10; // 10%
export const MAX_INSTALLMENTS = 12;

// Interest rates for installments (1x to 12x)
// Based on the provided table:
// 1x: 0%
// 2x: 5.16%
// ...
// 12x: 30.96%
// We can store the *factor* directly.
// Total = Price * Factor.
// Factor = 1 + (Interest % / 100)
// Or we can store the installment amount factor directly?
// The user provided:
// 1x: 1000 -> 1000
// 12x: 1000 -> 1309.56 (30.96% increase)

// Let's define the interest factors (multipliers) for each installment count.
// Index 0 = 1x, Index 1 = 2x, etc.
export const INSTALLMENT_FACTORS = [
    1.0000, // 1x
    1.0516, // 2x
    1.0774, // 3x (approx from 7.74%)
    1.1032, // 4x
    1.1290, // 5x
    1.1548, // 6x
    1.1806, // 7x
    1.2064, // 8x
    1.2322, // 9x
    1.2580, // 10x
    1.2838, // 11x
    1.3096, // 12x
];

export const calculateInstallment = (price: number, installments: number) => {
    if (installments < 1 || installments > 12) return { total: price, value: price };

    const factor = INSTALLMENT_FACTORS[installments - 1];
    const total = price * factor;
    const value = total / installments;

    return { total, value };
};
