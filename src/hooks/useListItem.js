const generateStatus = (data) => {
  const {
    importedAmount,
    importedIgnoredAmount,
    totalAmount,
    isGettingRefunds,
    isGettingAddresses,
    planUpgradeNeeded,
    covered,
  } = data;

  if (
    typeof totalAmount !== "undefined" &&
    typeof importedAmount !== "undefined" &&
    totalAmount === importedAmount
  ) {
    return "fully-imported";
  }
  if (totalAmount === 0 && importedIgnoredAmount !== 0) {
    return "fully-imported";
  }
  if (isGettingRefunds || isGettingAddresses) {
    return "fetching-events";
  }
  if (planUpgradeNeeded) {
    return "upgrade";
  }
  if (!covered) {
    return "buy";
  }
  if (
    totalAmount !== importedAmount &&
    (totalAmount !== 0 || importedIgnoredAmount !== 0)
  ) {
    return "incomplete-import";
  }
  if (!importedAmount && !importedIgnoredAmount) {
    return "not-imported";
  }
};

export const useListItem = (data) => {
  const action = generateStatus(data);

  const infoText = {
    "not-imported": "Open",
    "fully-imported": `$${data.totalAmount}`,
    "fetching-events": "Fetching refund events",
    upgrade: "Upgrade from Lite",
    buy: "No subscription",
    "incomplete-import": "Incomplete",
  };

  const primaryButtonStatus = {
    "not-imported": "import",
    "fully-imported": "disabled",
    "fetching-events": "disabled",
    upgrade: "upgrade",
    buy: "buy",
    "incomplete-import": "import",
  };

  const isSecondaryBtnActive =
    action === "fully-imported" || action === "incomplete-import";

  const primaryBtnHandlers = {
    "not-imported": () => console.log("Import button was clicked !"),
    "incomplete-import": () => console.log("Import button was clicked !"),
    upgrade: () => console.log("Upgrade button was clicked !"),
    buy: () => console.log("Buy button was clicked !"),
  };

  return {
    action,
    infoText: infoText[action],
    isSecondaryBtnActive,
    primaryButtonStatus: primaryButtonStatus[action],
    primaryBtnHandler: primaryBtnHandlers[action],
  };
};
