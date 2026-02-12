<h1># Quiz_App</h1>

**Overview**

This project is a Quiz Application built using Salesforce Lightning Web Components (LWC).
It displays multiple-choice questions, allows users to select answers, and calculates the final score when the quiz is submitted. Users can also reset the quiz and attempt again.

----------------------------------------------------

**Features**

✅ Displays a list of quiz questions with multiple-choice options

✅ Tracks user-selected answers per question

✅ Calculates score on submission (counts correct answers)

✅ Shows total correct answers

✅ Reset functionality to clear selections and score

--------------------------------------------------------------

**Technology Used**

Salesforce Lightning Web Components (LWC)

JavaScript

HTML / CSS (for UI and styling within Salesforce)

---------------------------------------------------------------

**How It Works**

**1. Question Data**

Questions are stored in a JavaScript array (allQuestions) where each question contains:

id

question

options (a, b, c...)

answer (correct option key)

**2. Selecting an Answer**

When the user selects a radio button:

The selected option is stored in selectedValue

Structure:

{ "1": "a", "2": "b" }

**3. Submitting the Quiz**

On submit:

The component filters all questions and checks if selected answers match correct answers

The total correct count is stored in correctAnswers

isSubmitted is set to true to show results

**4. Resetting the Quiz**

On reset:

Clears selectedValue

Resets score to 0

Unchecks all radio buttons using DOM query selector

