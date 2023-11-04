// valve
// max valve (ml/msec)
const MAX_WATER_SUPPLY = 224 / 1000;

export const getWaterMlFromValve = (timeMsec: number, hvRate: number) => {
	if (hvRate < 0 || hvRate > 1) throw new RangeError();
	return MAX_WATER_SUPPLY * hvRate * timeMsec;
};

// pot
const POT_CAPACITY = 1526;

const getWaterMlFromPot = (amountWaterMlPerMsec: number, timeMsec: number) =>
	amountWaterMlPerMsec * timeMsec;

export const potFillRate = (waterVol: number): number =>
	{
		const _rate = waterVol / POT_CAPACITY;
		if (_rate >= 1) return 1;

		console.assert(_rate >= 0);
		return _rate
	};

// cup
// todo
const CUP_CAPACITY = 700;
export const cupFillRate = (waterVol: number): number =>
{
	const _rate = waterVol / CUP_CAPACITY;
	if (_rate >= 1) return 1;

	console.assert(_rate >= 0);
	return _rate
};
