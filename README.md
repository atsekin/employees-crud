# Employees test task

This is the frontend part of employees test task.

## Explanations

Store managers aka Redux/Zustand/Valtio were not used, becase here we don't share state between views and don't persist data. React query stores response

Design was extracted from pdf file to figma, so it was possible to extract indents and colors, but not fonts, so fonts were used approximately

I decided to use PUT request for user updates, and POST only for creation, looks more standard

Modal of user creation and "Lunch time" status icon were missed in pdf, so I implemented them on my own

## Running app
To see full experience, please also clone https://github.com/atsekin/employees-api (its simple backend server to handle CRUD operations)
Please use port 5173 for frontend (its necessary for cors settings) and 3000 for backend

To run FE app, please run

`pnpm install`

`pnpm run dev`

To run backend

`npm install`

`npm run dev`