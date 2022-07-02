// module container
export const MODULE_CONTAINER = {
  HEIGHT: 5.4,
  WIDTH: 5.4,
};

// module
export const COVER_MOD_SIZE = {
  HEIGHT: 0.1,
  WIDTH: 2.1,
};
export const MIDDLE_MOD_SIZE = {
  OUTER: {
    HEIGHT: 4.1,
    WIDTH: 2.1,
  },
  INNER: {
    HEIGHT: (4.1 * 36) / 43,
    WIDTH: 0.7,
  },
};

export const CIRCLE_MOD_SIZE = {
  OUTER: {
    SIZE: 3.2,
  },
  INNER: {
    SIZE: 2.5,
    RADIUS: 1.25,
  },
  MIN_MARGIN: 0.35,
  HV: {
    HEIGHT: 0.15 + 1.1 + 0.075,
    WIDTH: 0.3,
    BONE: 1.1,
    SM_RADIUS: 0.075,
    LG_RADIUS: 0.15,
  },
  LIGHT: {
    MARGIN: 0.07,
    RADIUS: 0.1 / 2,
  },
  POT_TRIANGLE: {
    WIDTH: 0.7,
  },
};

const LONG_NUM_SIZE = 0.25;
const LONG_OUTER_HEIGHT = 1;
const LONG_INNER_HEIGHT = 0.3;
export const LONG_MOD_SIZE = {
  OUTER: {
    HEIGHT: LONG_OUTER_HEIGHT,
    WIDTH: 4.3,
  },
  INNER: {
    HEIGHT: LONG_INNER_HEIGHT,
    WIDTH: (512.12761 - 138.0611) / 100,
  },
  NUM_MARGIN: {
    VERTICAL: ((LONG_OUTER_HEIGHT - LONG_INNER_HEIGHT) / 2 - LONG_NUM_SIZE) / 2,
    HORIZONTAL: 0.1,
  },
  NUM_SIZE: LONG_NUM_SIZE,
};

export const NEXT_MOD_SIZE = {
  HEIGHT: 1,
  WIDTH: 1,
};

export const SWITCH_SIZE = {
  SIZE: 1,
  CIRCLE_RADIUS: 0.5 / 2,
};

// module gap
export const MODULE_GAP = 0.1;
