# learn-cypress
This repo contains my work on cypress automation framework.

## How to run E2E tests locally 

#### Prerequisites 

- [Install latest, stable version of Node.js](https://nodejs.org/en/download/)
- [Install GIT](https://git-scm.com/downloads)


#### Steps

1. Clone [learn-cypress](https://github.com/deepak2automation/learn-cypress.git) repository.
2. Open folder _**cypress-demo-web-shop**_ in Visual Studio Code and launch a terminal window.
3. Run a command to install Cypress and all dependencies:
```
    npm init -y
    npm install cypress
    npx cypress verify
```

4. Start Cypress with the command:
```
    npx cypress open
```
5. Click on a desired  _**.ts**_ file in a newly opened window(cypress test runner).
6. You can observe execution of chosen test suite.
