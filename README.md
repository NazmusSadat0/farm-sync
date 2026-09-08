# 🌾 FarmSync

FarmSync is a frontend-based farm equipment management system designed to help farm operators and managers manage equipment, report equipment-related problems, submit new equipment requests, and handle equipment allocation decisions.

The project was developed as a hackathon MVP focusing on the **equipment management sector of a growing farm**.

As farms become larger, manually tracking equipment availability, problems, operating costs, workers, and equipment requests becomes increasingly difficult. FarmSync provides a simple digital workflow to organize these operations.

---

## 🎯 Problem Statement

Managing a small farm manually is relatively simple. However, as a farm grows, the number of fields, workers, crops, and machines also increases.

This creates several challenges:

- Difficulty tracking available farm equipment
- Equipment problems may not be reported efficiently
- Workers may not know which equipment is available
- Equipment requests can become difficult to manage
- Managers need a centralized view of equipment stock and operating information
- Communication between operators and managers can become inefficient

FarmSync focuses on simplifying these equipment-related operations.

---

## 💡 Our Solution

FarmSync provides two main interfaces:

### 👨‍🌾 Operator

Operators can:

- View available farm equipment
- Check equipment status
- Report equipment-related problems
- Submit new equipment requests
- Receive equipment allocation decisions
- Accept or reject a manager's proposed solution
- Request another review when a proposed solution is rejected

### 👨‍💼 Manager

Managers can:

- View the farm equipment dashboard
- Monitor equipment stock
- Check equipment availability
- View estimated daily operating expenses
- View required workers for different equipment
- Review operator problems
- Review new equipment requests
- Provide equipment solutions and suggestions
- Track requests as pending or completed

---

## 🚀 Live Demo

FarmSync is deployed on **Vercel** and can be accessed here:

👉  https://farm-sync-five.vercel.app/ 

---

## ✨ Key Features

### Equipment Dashboard

The Manager Dashboard provides information about farm equipment such as:

- Equipment name
- Stock
- Availability
- Daily operating expense
- Required farmers/workers

The current MVP contains information for 10 types of agricultural equipment.

### Problem Reporting

Operators can report an equipment-related problem by submitting the required information.

The request then enters the problem-management workflow.

### New Equipment Requests

Operators can separately submit new equipment requests.

These requests appear under the Manager's **New** section and are handled independently from reported problems.

### Manager Request Management

The Manager interface contains separate sections for:

- Dashboard
- Problems
- New Requests

Managers can open individual requests and provide an appropriate equipment solution and suggestion.

Problem requests can also contain a usage duration.

### Request Status Tracking

Manager requests can have statuses such as:

- `অপেক্ষমাণ` — Pending
- `সফল হয়েছে` — Completed

The status is updated after the manager submits a solution.

### Simulated Manager Responses

Because the current hackathon MVP is frontend-only, the Operator workflow uses predefined dummy manager responses instead of a backend server.

Five possible responses are available and one is selected randomly.

A response can contain:

- Equipment
- Duration (for Problem requests)
- Manager suggestion

### Accept / Reject Workflow

After receiving a solution, the Operator can either:

**Accept**

The request is successfully completed and the Operator can return to the dashboard.

**Reject**

The request enters the review process again.

The system displays a waiting message for **5 seconds** without showing a countdown.

After the waiting period, another dummy manager response is generated.

The immediately rejected response is excluded from the next random selection.

The Operator can continue rejecting solutions until an acceptable solution is received.

---

## 🔄 Application Workflow

### Problem Request

```text
Operator Dashboard
       ↓
Report Problem
       ↓
Submit Request
       ↓
Submission Successful
       ↓
Manager Decision
       ↓
Equipment + Duration + Suggestion
       ↓
    Accept?
    /     \
  Yes      No
   ↓        ↓
Accepted   Reviewing
   ↓        ↓
Dashboard  Wait 5 Seconds
            ↓
       New Dummy Response
            ↓
        Accept Again
```

### New Equipment Request

```text
Operator Dashboard
       ↓
New Request
       ↓
Submit Request
       ↓
Submission Successful
       ↓
Manager Decision
       ↓
Equipment + Suggestion
       ↓
    Accept?
    /     \
  Yes      No
   ↓        ↓
Accepted   Reviewing
   ↓        ↓
Dashboard  New Response
```

---

## 🛠️ Tool Stack

### Frontend Development

- **React.js** — Used to build the user interface using reusable React components.

- **Vite** — Used as the development and build environment for the React application.

- **React Router DOM** — Used for client-side routing between Operator, Manager, request, review, and decision pages.

- **JavaScript (ES6+)** — Used for application logic, forms, random dummy responses, status management, and workflow simulation.

- **React Hooks** — Hooks such as `useState`, `useEffect`, `useNavigate`, and `useParams` are used for component state, timed behavior, navigation, and dynamic request pages.

- **HTML5 & CSS3** — Used to create and style dashboards, forms, equipment tables, status indicators, buttons, responsive layouts, and other interface components.

- **Local Storage** — Used to preserve Manager-side request completion statuses in the frontend.

- **Session Storage** — Used to temporarily maintain the Operator's current request and generated manager response across different routes.

### Development & Collaboration

- **Git** — Used for source-code version control and tracking project changes.

- **GitHub** — Used for repository hosting, collaboration, version management, and hackathon submission.

- **OpenAI Codex** — Used as an AI-assisted development tool for frontend implementation, debugging, and code development.

- **Vercel** — Used to deploy and host the FarmSync frontend application.

---

## 📁 Project Structure

```text
src/
│
├── data/
│   └── dummyResponses.js
│
├── utils/
│   └── dummyResponse.js
│
├── pages/
│   ├── Home.jsx
│   │
│   ├── Operator.jsx
│   ├── ReportProblem.jsx
│   ├── NewReport.jsx
│   ├── Submitted.jsx
│   ├── OperatorDecision.jsx
│   ├── Reviewing.jsx
│   ├── Accepted.jsx
│   │
│   ├── Manager.jsx
│   ├── ManagerProblems.jsx
│   ├── ManagerProblemDetail.jsx
│   ├── ManagerNew.jsx
│   └── ManagerNewDetail.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```
---


## 🖥️ Main Pages

### Operator Side

- Operator Dashboard
- Problem Report
- New Equipment Request
- Submission Confirmation
- Manager Decision
- Reviewing
- Request Accepted

### Manager Side

- Manager Dashboard
- Problem Requests
- Problem Details & Solution
- New Requests
- New Request Details & Solution

---

## 🧪 MVP Implementation

FarmSync is currently a **frontend-only hackathon MVP**.

The current version intentionally does not use:

- Backend server
- Database
- Authentication server
- AI model
- External API

Instead, the project uses predefined dummy data, randomized responses, browser storage, and React state to demonstrate the complete user experience.

This allows the core product concept and workflow to be demonstrated without requiring production infrastructure.

---

## 🔮 Future Improvements

The prototype can later be expanded with:

- Backend API
- Database integration
- Real Operator and Manager accounts
- Authentication and authorization
- Real-time request notifications
- Dynamic equipment inventory
- Equipment booking and scheduling
- Maintenance history
- Equipment usage history
- Expense tracking
- Worker assignment
- Search and filtering
- Analytics and reporting
- Weather and farm-data integration

---

## 👥 Contributors

Add your team members here:

```text
Nazmus Sadat 
Adil Mahmud Ayon 
Antora Ghosh 
Mitaly Farzana 
```

---

## 📌 Project Status

**Hackathon MVP / Prototype**

The current goal of FarmSync is to demonstrate how a structured digital equipment-management workflow can improve coordination between farm operators and managers.

---

## 📄 License

This project was developed for educational and hackathon purposes.
