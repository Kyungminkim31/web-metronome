export const NOTE_VALUE = {
  WHOLE_NOTE: 1,
  HALF_NOTE: 2,
  QUARTER_NOTE: 4,
  EIGHTH_NOTE: 8,
} as const;

type NOTE_VALUE = typeof NOTE_VALUE[keyof typeof NOTE_VALUE];