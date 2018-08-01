"use babel";
// @flow

export type FailTaskAction = {
  type: "FAIL_TASK",
  payload: {
    id: string,
    name: string,
    date: number,
  },
};

export function failTask(
  id: string,
  name: string,
  date: number,
): FailTaskAction {
  return {
    type: "FAIL_TASK",
    payload: {
      id,
      name,
      date,
    },
  };
}
