"use babel";
// @flow

import * as React from "react";
import styled from "styled-components";
import type { DiagnosticSeverity } from "../Types/types";

const FilterBox = styled.div`
  display: flex;
  flex: 0 0 auto;
  padding: 8px 16px;
  border-radius: 25px;
  align-items: center;
  opacity: ${props => (props.activated ? "1" : "0.5")};
  transition: opacity 0.375s;
  &:hover {
    opacity: ${props => (props.activated ? "0.75" : "0.75")};
  }
  &:active {
    opacity: ${props => (props.activated ? "0.5" : "1")};
  }
  cursor: ${props => (props.onClick ? "pointer" : undefined)};
  user-select: none;
  margin: 8px;
`;

const FilterName = styled.span`
  font-size: 12px;
`;

const FilterIcon = styled.span`
  height: 15px;
  width: 15px;
  margin: 0px 5px 0px 0px;
`;

function getIconForType(severity: DiagnosticSeverity): string {
  switch (severity) {
    case 3:
      return "info";
    case 2:
      return "alert";
    case 1:
      return "issue-opened";
    case 5:
      return "check";
    default:
      return "";
  }
}

function getDiagnosticColorClassNameForType(
  severity: DiagnosticSeverity,
): string {
  switch (severity) {
    case 3:
      return "diagnostic-color-info";
    case 2:
      return "diagnostic-color-warning";
    case 1:
      return "diagnostic-color-error";
    case 5:
      return "diagnostic-color-success";
    default:
      return "";
  }
}

function getFilterNameForSeverity(severity: DiagnosticSeverity): string {
  switch (severity) {
    case 1:
      return "error";
    case 2:
      return "warning";
    case 3:
      return "info";
    case 4:
      return "hint";
    case 5:
      return "success";
    default:
      return "";
  }
}

export default function DiagnosticsTypeFilter({
  severity,
  activated = false,
  onClick,
}: {
  severity: DiagnosticSeverity,
  activated: boolean,
  onClick: () => void,
}) {
  return (
    <FilterBox
      className={`${getDiagnosticColorClassNameForType(severity)}`}
      activated={activated}
      onClick={onClick}
    >
      <FilterIcon
        className={`color-text-white icon icon-${getIconForType(severity)}`}
      />
      <FilterName className="color-text-white">
        {getFilterNameForSeverity(severity)}
      </FilterName>
    </FilterBox>
  );
}
