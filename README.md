# Overview

## Requirements

1. Should have database connectivity
2. Should have separate server
   1. Server should serve frontend from /client
3. Should have JWT Authentication
   1. Use PassportJS with OAUTH 2.0 (if free)
4. Should have Tests
   1. Unit and Integration Tests with React Testing Library
   2. E2E Tests with Cypress
5. Should use React-Query for data fetching
   1. Cache calls at least once
6. Should have in the very least:
   1. a Register Page
   2. a Sign In Page
   3. a Dashboard Page
7. Should use Suspense and Concurrent
8. NO PATCH calls. PUT only.
9. NO Mongoose.
10. DB Hosted on Atlas
11. Should use Error Boundaries

## Backend Planning

- Setup Jest and Supertest
- Setup Logging (preferrably Winston)
- Design Database (models)
  - Users (userId)
    - Lists (listId)
      - Tasks (taskId)
- Create DB on Atlas and install Compass UI locally
  - Add validation rules to the different collections based on the models
  - Test if they're working as expected
- Create convenience MongoDB module to interact with DB
- Setup routes:
  | Users | Lists | Tasks |
  | ----- | ----- | ----- |
  | Create new user | Create new list | Add task to a list |
  | Read an existing user | Get list(s) | Get tasks from a list |
  | Update an existing user | Update an existing task | Edit a task in a list |
  | Delete an existing user | Delete a list | Delete a task from a list |
- Setup authentication using Google's OAuth 2.0 and PassportJS
- Setup Auth Routes
  - POST /signup (same as Create new user)
  - POST /login
  - GET /logout

## Next Steps

1. Setup React Manually
2. Webpack/Babel
3. SASS/PostCSS/StyleLint
4. Typescript
5. Server Side Rendering
6. Responsive
7. Immutable JS
8. CICD Pipeline
9. Feature Flags
10. Animations
11. Reddis Cache in the Backend
