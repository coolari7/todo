import React from "react";

export function usePopup(ref) {
  if (!ref) {
    throw new Error("usePopup needs a ref!");
  }

  const [isOpen, setIsOpen] = React.useState(false);

  const setPopupStatus = (status, handler) => {
    switch (status) {
      case "open":
        document.addEventListener("mousedown", handler);
        setIsOpen(true);
        break;
      case "close":
        document.removeEventListener("mousedown", handler);
        setIsOpen(false);
        break;
      default:
        throw new Error("Unhandled Case!");
    }
  };

  const onOutsideClick = React.useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setPopupStatus("close", onOutsideClick);
      }
    },
    [ref]
  );

  const toggle = React.useCallback(() => {
    if (!isOpen) {
      setPopupStatus("open", onOutsideClick);
    } else {
      setPopupStatus("close", onOutsideClick);
    }
  }, [isOpen, onOutsideClick]);

  return React.useMemo(() => ({ isOpen, toggle }), [isOpen, toggle]);
}
