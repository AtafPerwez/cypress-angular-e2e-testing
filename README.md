This project requires Node v14.8.0

Simplilearn AT JG lab comes with Node v17.2.0 by default.

NVM is a Nodejs version manager that enables users to use different Node versions for different projects.

To switch the version from 17 to 14, follow the steps below:

Install the NVM package using the command,
**curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash**

Next, install Nodejs version 14.8.0 by the executing command, 
**nvm install 14.8.0**  //If you get an error, restart the terminal and try again. 

To verify the installation and version, use the command:
**node -v** or **node --version**

==========================================================================================================================================

# 🚀 Cypress E2E Testing - Angular (ngx-admin)

## 📌 Project Overview
This project demonstrates End-to-End (E2E) testing of an Angular-based dashboard application using Cypress. The application is built using the ngx-admin template and Nebular UI components.

## 🛠️ Tech Stack
* Angular (ngx-admin)
* Cypress (v10)
* Node.js (v14)
* JavaScript

## 🎯 Test Scenarios

### ✅ Scenario 1: Forms Testing
* Validated form inputs (email, password)
* Interacted with checkbox and Sign In button
* Used stable selectors (`data-cy`)

### ✅ Scenario 2: Radio Buttons
* Verified enabled/disabled states
* Checked selection behavior
* Applied Cypress assertions

### ✅ Scenario 3: Toastr & Checkboxes
* Triggered toast notifications
* Validated UI feedback
* Tested checkbox interactions

## ⚙️ Setup Instructions
```bash
git clone https://github.com/YOUR_USERNAME/cypress-angular-e2e-testing.git
cd cypress-angular-e2e-testing
npm install
npx ng serve --port 4300
```

Run Cypress:

```bash
npx cypress open
```

## 🧠 Key Learnings
* Handling Angular animations in Cypress
* Using `.within()` for scoped testing
* Avoiding flaky tests with proper assertions
* Working with dynamic UI elements

## 📊 Test Results
✔ All scenarios executed successfully
✔ 100% test pass rate

## 👨‍💻 Author
Md Ataf Perwez
