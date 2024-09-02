import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import course3 from "../assets/course3.png";

import img1 from "../assets/profile1.png";
import img2 from "../assets/profile2.png";
import img3 from "../assets/profile3.png";

export const courseCardDetail = [
  {
    id: 1,
    key: "a",
    courseBanner: course1,
    courseTitle: "Frontend Development with React",
    author: "Alexa Yu",
  },
  {
    id: 2,
    key: "b",
    courseBanner: course2,
    courseTitle: "Unity Development Full Tutorial",
    author: "Ben Afflick",
  },
  {
    id: 3,
    key: "c",
    courseBanner: course3,
    courseTitle: "Backend Development with Nodejs",
    author: "Mosh Sharma",
  },
];

// testimonials
export const reviews = [
  {
    key: "A",
    imgUrl: img1,
    customerName: "Tom Holland",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nulla sed quidem optio expedita deleniti itaque?",
  },
  {
    key: "B",
    imgUrl: img2,
    customerName: "Mike Wilson",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nulla sed quidem optio expedita deleniti itaque?",
  },
  {
    key: "C",
    imgUrl: img3,
    customerName: "Jessica Tyler",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nulla sed quidem optio expedita deleniti itaque?",
  },
];

// testimonials carousal responsive
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};

// navbar
export const navigation = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Courses", path: "/courses" },
  { title: "Resources", path: "/resources" },
  { title: "Contact", path: "/contact" },
];

// about us
export const stats = [
  { id: "A", title: "15+", subtitle: "Instructors" },
  { id: "B", title: "5k+", subtitle: "Students" },
  { id: "C", title: "98%", subtitle: "Loremeum" },
  { id: "D", title: "20%", subtitle: "Sitfolar" },
];

// FAQs
export const faqsList = [
  {
    q: "What are some random questions to ask?",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
  {
    q: "Do you include common questions?",
    a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
  },
  {
    q: "Can I use this for 21 questions?",
    a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
  },
  {
    q: "Are these questions for girls or for boys?",
    a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
  },
  {
    q: "What do you wish you had more talent doing?",
    a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
  },
];

// Course Detail - syllabus
export const syllabus = [
  {
    title: "Week 1: Introduction to Web Development",
    child1: "1. Overview of Frontend Development",
    child2:
      "2. Tools and Setup: IDEs, Version Control (Git & GitHub), Browser DevTools",
    child3: "3. Introduction to HTML",
    child4: "4. Basic structure of a webpage",
    child5: "5. Common HTML elements and attributes",
  },
  {
    title: "Week 2: Advanced HTML",
    child1: "1. Semantic HTML",
    child2: "2. Forms and Input Elements",
    child3: "3. Introduction to HTML5 features (audio, video, canvas)",
  },
  {
    title: "Week 3: Introduction to CSS",
    child1: "1. CSS Syntax and Selectors",
    child2: "2. Colors, Fonts, and Text Styling",
    child3: "3. Box Model and Layout Basics (margin, padding, border)",
  },
  {
    title: "Week 4: Advanced CSS",
    child1: "1. CSS Positioning (static, relative, absolute, fixed)",
    child2: "2. Flexbox Layout",
    child3: "3. Grid Layout",
    child4: "4. Responsive Web Design Basics",
  },
  {
    title: "Week 5: Introduction to JavaScript",
    child1: "1. JavaScript Basics: Variables, Data Types, Operators",
    child2: "2. Functions and Control Structures (loops, conditions)",
    child3: "3. DOM Manipulation: Selecting and modifying elements",
  },
  {
    title: "Week 6: JavaScript Events",
    child1: "1. Event Handling and Listeners",
    child2: "2. Form Validation with JavaScript",
    child3: "3. JavaScript Best Practices",
  },
  {
    title: "Week 7: Advanced JavaScript",
    child1: "1. Arrays and Objects",
    child2: "2. ES6 Features (Arrow Functions, Template Literals, Destructuring)",
    child3: "3. Introduction to JavaScript Modules",
  },
  {
    title: "Week 8: Building Dynamic Web Pages",
    child1: "1. Working with the Fetch API for HTTP Requests",
    child2: "2. Introduction to JSON and working with APIs",
    child3: "3. Basic project: Create a dynamic website with HTML, CSS, and JavaScript",
  },
  {
    title: "Week 9: Introduction to Frontend Frameworks",
    child1: "1. Introduction to React.js (or an alternative like Angular/Vue.js)",
    child2: "2. Understanding Components and JSX",
    child3: "3. State Management in React",
    child4: "4. Props and Component Lifecycle",
  },
  {
    title: "Week 10: Building with Frontend Frameworks",
    child1: "1. Handling Events and Forms in React",
    child2: "2. Working with APIs and Asynchronous Data",
    child3: "3. Introduction to Routing in Single Page Applications (React Router)",
  },
  {
    title: "Week 11: Project Development",
    child1: "1. Plan and design a frontend project",
    child2: "2. Build and integrate components",
    child3: "3. Implement dynamic functionality with JavaScript and React",
    child4: "4. Ensure responsiveness and cross-browser compatibility",
  },
  {
    title: "Week 12: Review & Final Project",
    child1: "1. Code Review and Debugging",
    child2: "2. Best Practices in Frontend Development",
    child3: "3. Final Project Presentation",
    child4: "4. Course Wrap-Up and Future Learning Pathways",
  },
];
