import { useCallback, useState } from "react";

export const useUndo = <T>(initalPresent: T) => {
  const [state, setState] = useState<{
    past: T[];
    present: T;
    feature: T[];
  }>({
    past: [],
    present: initalPresent,
    feature: [],
  });

  const canUndo = state.past.length !== 0;
  const canRedo = state.feature.length !== 0;

  const undo = useCallback(() => {
    setState((currentState) => {
      const { past, present, feature } = currentState;
      if (past.length === 0) return currentState;

      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        feature: [present, ...feature],
      };
    });
  }, []);

  const redo = useCallback(() => {
    setState((currentState) => {
      const { past, present, feature } = currentState;
      if (feature.length === 0) return currentState;

      const next = feature[0];
      const newFeature = feature.slice(1);

      return {
        past: [...past, present],
        present: next,
        feature: newFeature,
      };
    });
  }, []);

  const set = useCallback((newPresent: T) => {
    setState((currentState) => {
      const { past, present } = currentState;

      if (newPresent === present) return currentState;

      return {
        past: [...past, present],
        present: newPresent,
        feature: [],
      };
    });
  }, []);

  const reset = useCallback((newPresent: T) => {
    setState(() => {
      return {
        past: [],
        present: newPresent,
        feature: [],
      };
    });
  }, []);

  return [state, { set, reset, undo, redo, canUndo, canRedo }] as const;
};
