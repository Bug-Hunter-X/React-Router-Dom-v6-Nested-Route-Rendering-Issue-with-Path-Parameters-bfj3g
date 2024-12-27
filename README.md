# React Router Dom v6 Nested Route Rendering Issue

This repository demonstrates a bug in React Router Dom v6 where nested routes fail to render correctly when the parent route includes path parameters. The parent route renders, but its child routes do not.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Navigate to `/category/123` or another path with parameters.

You will observe that the parent route (`Category`) renders, but the nested routes (`Product`) do not.

## Solution

The solution involves using the `useParams` hook to access the path parameters within the parent route and passing them down to the child routes. This allows the child routes to render correctly.

See the `bugSolution.js` file for the corrected code.