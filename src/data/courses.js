// src/data/courses.js
const courses = [
  {
    id: 1,
    title: "Basic Crop Production",
    instructor: "Mr. Adewale Okon",
    category: "Crops",
    level: "Secondary School",
    duration: "4 weeks",
    rating: 4.7,
    students: 2340,
    image: "🌾",
    description: "Perfect for secondary students and beginner farmers.",
    lessons: [
      { id: 101, title: "Soil Preparation", content: "https://www.youtube.com/embed/Q5CthF9sa9o", duration: "25 min" },
      { id: 102, title: "Planting Techniques", content: "https://www.youtube.com/embed/T6zdbLza31s", duration: "30 min" },
      { id: 103, title: "Harvesting & Storage", content: "https://www.youtube.com/embed/KLM22i0FfVg", duration: "20 min" }
    ]
  },
  {
    id: 2,
    title: "Advanced Poultry Management",
    instructor: "Dr. Fatima Yusuf",
    category: "Livestock",
    level: "Tertiary",
    duration: "6 weeks",
    rating: 4.9,
    students: 1450,
    image: "🐔",
    description: "Complete guide to modern poultry farming.",
    lessons: [
      { id: 201, title: "Broiler vs Layer Management", content: "https://www.youtube.com/embed/SRJk2COIOxk", duration: "35 min" },
      { id: 202, title: "Common Diseases & Vaccination", content: "https://www.youtube.com/embed/gDg5BXYFGZ4", duration: "28 min" }
    ]
  },
  {
    id: 3,
    title: "Sustainable Irrigation Systems",
    instructor: "Engr. Chukwudi Eze",
    category: "Technology",
    level: "Commercial Farmers",
    duration: "5 weeks",
    rating: 4.8,
    students: 980,
    image: "💧",
    description: "Learn drip irrigation and water conservation.",
    lessons: [
      { id: 301, title: "Drip Irrigation Basics", content: "https://www.youtube.com/embed/tmEj3MQPlTY", duration: "22 min" }
    ]
  },
  {
    id: 4,
    title: "Fish Farming (Aquaculture)",
    instructor: "Mrs. Ngozi Okoro",
    category: "Fisheries",
    level: "Beginner to Intermediate",
    duration: "7 weeks",
    rating: 4.6,
    students: 760,
    image: "🐟",
    description: "Start your own catfish or tilapia farm.",
    lessons: [
      { id: 401, title: "Pond Construction", content: "https://www.youtube.com/embed/DEBs8CZBkEM", duration: "32 min" }
    ]
  },
  {
    id: 5,
    title: "Agribusiness & Farm Management",
    instructor: "Prof. Ibrahim Musa",
    category: "Agribusiness",
    level: "Intermediate",
    duration: "8 weeks",
    rating: 4.9,
    students: 1120,
    image: "💼",
    description: "Turn your farm into a profitable business.",
    lessons: [
      { id: 501, title: "Farm Business Planning", content: "https://www.youtube.com/embed/FjVmtALJmfY", duration: "40 min" }
    ]
  }
];
export default courses;