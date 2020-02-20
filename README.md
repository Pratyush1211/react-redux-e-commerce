# REACT & REDUX E COMMERCE STORE

React, Redux book e-commerce application example using localStorage as API.

Open [react-redux-e-commerce](https://defex.github.io/react-redux-e-commerce/) to view it in the browser.

## Getting started

Download the repository
`git clone git@github.com:Defex/react-e-shop.git`

go to repository directory
`cd react-e-shop`

install dependencies
`yarn`

start the application
`yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

build the project
`yarn build`

## Build with

- Create React App
- TypeScript
- Redux
- Redux toolkit
- Redux persist
- Material UI

## Functionality

- Three user roles
  - admin:
    - can create, update, delete store items (books)
    - view users
    - view user orders
    - change order status
    - logout
  - client:
    - view books
    - add items to cart
    - create an order
    - cancel created order
    - logout
  - unauthenticated user:
    - view books
    - add items to cart
    - login
