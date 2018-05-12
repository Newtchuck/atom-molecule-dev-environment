"use babel";
// @flow

import { connect } from "react-redux";
import type { State } from "../../../GlobalSystem/types.js.flow";
import { selectConsoleLogsReducer } from "../../../GlobalSystem/Selectors";
import { selectConsoleSourcesReducer } from "../../../GlobalSystem/Selectors";
import ConsoleTraveller from "../Presenters/ConsoleTraveller";
import selectLogs from "../Selectors/Logs";
import type { ConsoleLogsReducer } from "../Reducers/ConsoleLogs";

export function mapStateToProps(state: State): { logs: ConsoleLogsReducer } {
  return {
    logs: selectConsoleLogsReducer(state).filter(logs => {
      const source = selectConsoleSourcesReducer(state).filter(sources => {
        return sources[1] == true;
      });
      return source.has(logs.source);
    })
  };
}

export function mapDispatchToProps() {
  return {};
}

export var Connecter = connect(mapStateToProps, mapDispatchToProps);

export default Connecter(ConsoleTraveller);