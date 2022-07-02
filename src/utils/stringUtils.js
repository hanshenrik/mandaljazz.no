export const HTMLEntities = {
  ndash: "\u2013",
  mdash: "\u2014",
  nonBreakingSpace: "\u00A0",
  ampersand: "\u0026",
  trigram: "\u2630",
  multiplicationX: "\u2715",
};

export const generateId = (possiblyUnsafeIdString) =>
  possiblyUnsafeIdString &&
  `id-${possiblyUnsafeIdString
    .replace(/[^a-zA-Z/-]+/, "-")
    .replace(/\s/g, "")}`;
