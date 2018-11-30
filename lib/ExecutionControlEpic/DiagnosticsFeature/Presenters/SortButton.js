"use babel";
// @flow

import * as React from "react";
import { CheckboxButton } from "../../ExecutionControlEpic/ControlPanelFeature/Presenters/CheckboxButton.js";

export default class SortButton extends React.Component<Props, State> {
  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return <CheckboxButton />;
  }
}

SortButton.defaultProps = {};

type DefaultProps = {};

type Props = {
  onClick(): void
};

type State = {};
