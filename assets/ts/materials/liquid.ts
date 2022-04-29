
/**
 * Correct values for drawing 
 *
 * @param {number} amount
 * @return {number}  0 <= amount <= 1
 */
const correctLiquid4Drawing = (amount: number): number => {
    if (amount < 0) throw new Error("The water volume is negative.");

    const MAX_AMOUNT = 1
    if (amount >= MAX_AMOUNT) return MAX_AMOUNT
    return amount
}

// size
export const getLiquidSize = (maxAmount: number, amount: number) => {
    const correctedAmount = correctLiquid4Drawing(amount)

    return maxAmount * correctedAmount
}

// margin 
export const getLiquidTop = (innerTop: number, liquidHeight: number, innerHeight: number) => innerTop + (innerHeight - liquidHeight)
