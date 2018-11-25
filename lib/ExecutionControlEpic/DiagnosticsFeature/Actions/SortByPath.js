"use babel";
// @flow

import type { MoleculeDiagnostic } from "../Types/types";

export type sortDiagnosticsByPath = {
  path: boolean,
  diagnostics: Array<MoleculeDiagnostic>,
};

export type sortByPathAction = {
  type: "SORT_DIAGNOSTICS_BY_PATH",
  payload: sortDiagnosticsByPath,
};

export function sortByPath(
  sortDiagnostics: sortDiagnosticsByPath,
) : sortByPathAction {
  return {
    type: "SORT_DIAGNOSTICS_BY_PATH",
    payload: sortDiagnostics,
  };
}
