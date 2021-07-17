# Concept

## Introduction

The HTML structure of a dropdown typically looks something like below:

```
<parent>
  <button>Open Dropdown</button>
  <dropdown>...</dropdown>
</parent>
```

1. Typically, there is a *relative*ly-positioned `<parent>` container that houses the dropdown and the switch (button/div) that activates it.
2. The actual contents of the `<dropdown>` are *absolute*ly-positioned, and are conditionally visible depending on the current state of the dropdown.
3. The current state of the dropdown is stored in some kind of "state".
4. At bare minimum, flipping the switch toggles the current state, which then either hides the dropdown or makes it visible.
5. For a better user experience, two more cases need to be covered which mandate closing of the dropdown:
   1. When the user clicks on one of the dropdown items
   2. When the user clicks outside the `<parent>`

## Outside Click

1. For registering outside clicks, a `click` event-handler needs to be registered (and subsequently un-registered when no longer required [to prevent memory leaks]) globally (`document`).
2. In React, if the `<parent>` has a `ref` on it, we can check if the clicked target (`e.target`) is contained within the `<parent>` tree:
   1. If it does, then it is an INSIDE click, and corresponding action must be taken.
   2. If it does NOT, then it is an OUTSIDE click, and the dropdown should be closed.

```
// Parent
<div ref={myRef}>...</div>

// Click Event Handler
(e) => {
  if (!ref.current?.contains(e.target)) {
    // Close Dropdown, i.e. modify "state" accordingly
  }
}
```
