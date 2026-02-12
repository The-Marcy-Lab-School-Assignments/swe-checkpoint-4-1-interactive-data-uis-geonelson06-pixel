# Short Response Questions

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim. 

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content). 

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

## Question 1: Asynchronous Code

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

**Your Answer:**

Asynchronous code is when the code can run while allowing later code to run at the same time as opposed to Synchronous code where a later code line can only run after the previous one has finished running. Asynchronous code is useful for allowing multiple things to load on a page instead of it freezing because of a function that is taking too long to load.

## Question 2: GET vs. POST

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

**Your Answer:**

A GET request is used when you need to acquire data from an API, while a POST request is used when you need to create new data to store inside the API. An example of a GET request would be using fetch() to get data from PokeAPI to use in your browser. An example of a POST request would be when a client submits their information on a form, which creates data to send to the server API.

## Question 3: What is Vite and Why Use It?

What is Vite? What problem does it solve? And are there alternatives?

**Your Answer:**

Vite is a development server made to serve local files over HTTP. We use HTTP:// instead of File:// because loading a webpage using file means that it is unable to properly simulate the HTTP protocol which leads to CORS errors. This is why you have to use Vite when fetching data from APIs for your webpage.