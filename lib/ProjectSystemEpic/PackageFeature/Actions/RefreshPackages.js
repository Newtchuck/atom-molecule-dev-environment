"use babel";
// @flow

import type { Plugin, RefreshPackagesAction } from "../Types/types";

export function refreshPackages(
  rootPath: string,
  plugins: Array<Plugin>,
): RefreshPackagesAction {
  return {
    type: "REFRESH_PACKAGES",
    payload: {
      rootPath,
      plugins,
    },
  };
}
