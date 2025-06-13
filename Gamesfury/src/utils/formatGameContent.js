export const getGameType = (gameType) => {
  switch (gameType) {
    case "game":
      return "Base Game";
    case "demo":
      return "Demo";
    case "dlc":
      return "DLC";
    case "bundle":
      return "Bundle";
    case "software":
      return "Software";
    default:
      return "Unknown app type";
  }
};

export const getReviewSummary = (recCount) => {
  if (recCount >= 500000)
    return { message: "Overwhelmingly Positive", icon: "bi-hand-thumbs-up-fill text-success" };
  if (recCount >= 100000)
    return { message: "Very Positive", icon: "bi-hand-thumbs-up-fill text-success" };
  if (recCount >= 10000)
    return { message: "Positive", icon: "bi-hand-thumbs-up-fill text-warning" };
  if (recCount >= 1000) return { message: "Mixed", icon: "bi-hand-thumbs-up-fill text-warning" };
  if (recCount >= 100)
    return { message: "Mostly Negative", icon: "bi-hand-thumbs-up-fill text-danger" };
  if (recCount > 0) return { message: "Very Negative", icon: "bi-hand-thumbs-up-fill text-danger" };
  return { message: "No Recommendations", icon: "text-muted" };
};
