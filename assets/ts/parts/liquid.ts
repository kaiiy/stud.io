/**
 * Correct values for drawing
 *
 * @param {number} amount 0 <= val
 * @return {number}  0 <= amount <= 1
 */
export const correctLiquid4Drawing = (amount: number): number => {
	if (amount < 0) throw new RangeError();

	const MAX_AMOUNT = 1;
	if (amount >= MAX_AMOUNT) return MAX_AMOUNT;
	return amount;
};

// size
export const getLiquidSize = (maxAmount: number, amount: number) => {
	const correctedAmount = correctLiquid4Drawing(amount);
	return maxAmount * correctedAmount;
};

// margin
export const getLiquidTop = (
	innerTop: number,
	liquidHeight: number,
	innerHeight: number,
) => innerTop + (innerHeight - liquidHeight);
