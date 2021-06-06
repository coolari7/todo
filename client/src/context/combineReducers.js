export function combineReducer(reducers) {
  return (state, action) =>
    Object.keys(reducers).reduce(
      (total, curr) => ({
        ...total,
        [curr]: reducers[curr](total[curr], action),
      }),
      state
    );
}
