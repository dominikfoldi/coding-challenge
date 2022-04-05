# Improvements to consider

1. Create an actual REST API: currently the project is only a JavaScript file imported in the client file. I would create a real REST API e.g. with Express.
2. Create a real client: currently the client is only a JavaScript file called by node locally. I would create a HTML frontend e.g. with React or just a plain HTML to call the API.
3. Write tests: currently, there are no tests. I would write unit and end-to-end tests.
4. Deploy the project to the cloud: currently the project is not deployed to anywhere. I would deploy it to the cloud e.g. Firebase by using Firebase Functions and Firebase Hosting.
5. Advanced REST API with dynamic groupBy and maxBy: convert the API to accept a groupBy and a maxBy field in the queryparams so the user can choose how to group the data to find the top influencers.
6. Cleanup the CSV headers after parse: the CSV headers have whitespaces and the capitalization of the words are inconsistent. I would create more code friendly and consistent names for those.
7. Performance boost: the d3.js package may not be the fastest when dealing with CSV data. I would look into other packages or even my own implementation and compare the performance by using bigger input data.
8. Linting: I would setup ESLint for the project.
9. CI/CD: I woud setup a CI/CD pipeline to run the linting, tests on every push, and deploy the project on every PR merge.