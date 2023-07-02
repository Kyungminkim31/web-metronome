export const NoteValueObj= {
  WHOLE_NOTE: 1,
  HALF_NOTE: 2,
  QUARTER_NOTE: 4,
  EIGHTH_NOTE: 8,
} as const;

export type NoteValue = typeof NoteValueObj[keyof typeof NoteValueObj];
