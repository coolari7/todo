import React, { useRef } from "react";
import { renderChildren } from "utils/renderChildren";

const MenuContext = React.createContext();

function useMenuContext() {
  const context = React.useContext(MenuContext);
  if (!context) {
    throw new Error(
      "useMenuContext cannot be used outside the Menu component!"
    );
  }
  return context;
}

export function Menu({ children, ...props }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = useRef();

  const onOutsideClick = React.useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    },
    [ref]
  );
  const toggle = React.useCallback(() => {
    if (!isOpen) {
      document.addEventListener("mousedown", onOutsideClick, { once: true });
    }
    setIsOpen(!isOpen);
  }, [isOpen, onOutsideClick]);

  const value = React.useMemo(() => ({ isOpen, toggle }), [isOpen, toggle]);
  return (
    <MenuContext.Provider value={value}>
      <div ref={ref} {...props}>
        {children}
      </div>
    </MenuContext.Provider>
  );
}

function Button({ children }) {
  const { toggle } = useMenuContext();
  return (
    <React.Fragment>
      {renderChildren(children, { onClick: toggle })}
    </React.Fragment>
  );
}

function Items({ children, ...props }) {
  const { isOpen } = useMenuContext();
  return isOpen ? <div {...props}>{children}</div> : null;
}

function Item({ children }) {
  const { toggle } = useMenuContext();

  return (
    <React.Fragment>
      {renderChildren(children, { onClick: toggle })}
    </React.Fragment>
  );
}

Menu.Button = Button;
Menu.Items = Items;
Menu.Item = Item;
