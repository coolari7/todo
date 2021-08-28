import React from "react";
import { renderChildren } from "utils/renderChildren";
import { usePopup } from "hooks/usePopup";

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
  const ref = React.useRef();
  const value = usePopup(ref);

  return (
    <MenuContext.Provider value={value}>
      <div ref={ref} {...props}>
        {children}
      </div>
    </MenuContext.Provider>
  );
}

function Button({ children }) {
  const { isOpen, toggle } = useMenuContext();
  const props = {
    onClick: toggle,
    "aria-haspopup": "menu",
    ...(isOpen && { "aria-expanded": true }),
  };

  return <React.Fragment>{renderChildren(children, props)}</React.Fragment>;
}

function Items({ children, ...props }) {
  const { isOpen } = useMenuContext();
  return isOpen ? (
    <ul role="menu" {...props}>
      {children}
    </ul>
  ) : null;
}

function Item({ children }) {
  const { toggle } = useMenuContext();

  return <li onClick={toggle}>{children}</li>;
}

Menu.Button = Button;
Menu.Items = Items;
Menu.Item = Item;
