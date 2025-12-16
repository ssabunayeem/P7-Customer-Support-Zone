
# CS — Ticket System

  

## Project Overview

**CS — Ticket System** is a modern, intuitive customer support platform built for learning and practice purposes. It allows teams to manage support requests efficiently by creating, tracking, and resolving tickets in a structured workflow. The system supports ticket prioritization, status tracking, notifications, and analytics, offering a realistic simulation of a professional customer support environment.

  

This project was developed as a hands-on exercise in **React**, **Tailwind CSS**, and full-stack integration concepts.

  

---

  

## Features

- Create, edit, and delete tickets

- Assign ticket priorities (High, Medium, Low)

- Track ticket status (Open, In Progress, Resolved)

- Real-time task updates and notifications (using Toast)

- Banner counters for pending/resolved tickets

- Responsive design using Tailwind CSS

- Practice with state management and React components

  

---

  

## Tech Stack

-  **Frontend:** React, Tailwind CSS, daisyUI

-  **Backend (optional):** Node.js / Express (if integrated)

-  **Hosting / Deployment:** Surge.sh

-  **Version Control:** Git & GitHub

  

---

## React Questions - Short Answers

  

### 1. What is JSX, and why is it used?

JSX (JavaScript XML) lets you write HTML-like code inside JavaScript. It makes the UI code easier to read and write and gets compiled to `React.createElement()` calls.

  

### 2. What is the difference between State and Props?

-  **State**: Component’s internal data; can change over time.

-  **Props**: Data passed from parent to child; read-only.

  

### 3. What is the useState hook, and how does it work?

`useState` is a hook to add state in functional components.

It returns a state variable and a setter function to update it.

const [count, setCount] =  useState(0);

  

### 4. How  can  you  share  state  between  components  in  React?

`Lift`  state  to  a  common  parent  and  pass  via  props.

`Use`  React  Context  or  state  management  libraries  like  Redux.

  

5.  How  is  event  handling  done  in  React?

React  uses  camelCase  for  events  and  functions  as  handlers:

<button  onClick={handleClick}>Click Me</button>

  
  
  
  

---

## Project  Setup

  

1.  **Clone  the  repo**

```bash

git clone <your-repo-url>

cd cs-ticket-system

```

```cmd
link:  P7-Customer-Support-Zone.surge.sh
```