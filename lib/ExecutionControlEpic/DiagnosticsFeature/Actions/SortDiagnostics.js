"use babel";
// @flow

import type { MoleculeDiagnostic, SortDiagnosticsBy } from "../Types/types";

export type sortDiagnostics = {
  sort: SortDiagnosticsBy,
  diagnostics: Array<MoleculeDiagnostic>,
};

export type sortDiagnosticsAction = {
  type: "SORT_DIAGNOSTICS",
  payload: sortDiagnostics,
};

export function sortDiagnostics(
  sortDiagnostics: sortDiagnostics,
) : sortDiagnosticsAction {
  return {
    type: "SORT_DIAGNOSTICS",
    payload: sortDiagnostics,
  };
}

/**
TODO

Behaviour of the program:
  2 possibilities:
      - Sort by path
      - Sort by date

  Kind of button
    - checkbox ?
    - slide button ? (cf Iphone)

  Action : (Presenter) trigger if the button is touch. Send the type
  checked (path) unchecked (date)

  Reducer :  create two different actions ? Reducer impossible to do an if in there.

  Presenter : create the button (and choose one type)

  1 - Create the button and display it
  2 - Link it to actions and display in the console when it's triggered
  3 - Create the sort function on path or date
  4 - Handle the sort when new diagnostics are added in the Map<>

**/
