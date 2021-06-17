# Overview

## Requirements

1. Should be **BASIC**
2. Should use **hooks only**
3. Should use **React Router** for routing
4. Should **NOT** use components provided by any CSS Framework (unless absolutely necessary)
5. Should decide on a CSS Framework beforehand
6. Should **NOT** use Redux. Use Context API + useReducer
7. Should have Authentication (Private Routes). Use Google Sign In for Authentication.
8. Should have data fetching at least once somewhere. Use axios
9. Should have client/server setup
10. Should store the to-dos in a database.
11. Should use React Portals

## Steps

- Decide on a `Todo` schema

```javascript
{
  id: String, // Primary Key
  title: String,
  description: String,
  createdOn: Date,
  isComplete: Boolean,
  userId: User // Foreign Key
}
```

- Decide on a `User` schema

```javascript
{
  id: String, // Primary Key
  name: String,
  email: String,
  todos: Todo[], // Virtual
}
```

- Decide CSS Framework (will use [_semantic-ui_](https://semantic-ui.com/))
- Decide UI Layout
  - Use [cards](https://semantic-ui.com/views/card.html) for ToDos
  - Use [menu](https://semantic-ui.com/collections/menu.html#pointing) for Header
- Setup Authentication
- Setup Add to-dos

## Complex

1. Lists of [todos](https://softwareengineering.stackexchange.com/a/261273)
