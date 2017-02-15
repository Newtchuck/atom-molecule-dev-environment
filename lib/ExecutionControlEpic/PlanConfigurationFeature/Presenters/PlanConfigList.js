'use babel'
// @flow

import React from 'react';
import PlanConfigPart from "./PlanConfigPart";
import type {ConfigSchemaPart} from "../../../types";
import { fromJS } from "immutable";
import {getDefault} from '../Model/PlanConfigManipulators';
import AddButton from "./AddButton";

export default class PlanConfigList extends React.Component<DefaultProps, Props, State> {

  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ul style={{display: 'flex', flexDirection: 'column'}}>
        {this.props.values.map((value, i) => (
          <li key={i} style={{listStyle: 'none'}}>
            <PlanConfigPart
              // $FlowFixMe
              {...this.props.items}
              value={value}
              onChange={v => this.props.onChange(
                              fromJS(this.props.values)
                                .update(i, value => v)
                                .toJS()
                            )}
            />
          </li>
        ))}
        <AddButton onClick={() => this.props.onChange([].concat(this.props.values).concat(getDefault(this.props.items)))}/>
      </ul>
    )
  }
}

PlanConfigList.propTypes = {

};

PlanConfigList.defaultProps = {

};

type DefaultProps = {

};

type Props = {
  values: Array<mixed>,
  onChange(value: mixed): void,
  items: ConfigSchemaPart,
};

type State = {

};