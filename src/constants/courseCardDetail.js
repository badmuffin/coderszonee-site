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
    courseTitle: "Frontend Development using React",
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
    courseTitle: "Backend Development",
    author: "Mosh Sharma",
  },
];

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

// navbar
export const navigation = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Courses", path: "/courses" },
  { title: "Resources", path: "/resources" },
  { title: "Contact", path: "/contact" },
];
