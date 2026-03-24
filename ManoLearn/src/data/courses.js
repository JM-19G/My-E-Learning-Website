// src/data/courses.js
export const courses = [
  {
    id: 1,
    title: "Basic Crop Production",
    instructor: "Mr. Adewale Okon",
    category: "Crops",
    level: "Secondary School",
    duration: "4 weeks",
    lessonsCount: 12,
    rating: 4.7,
    students: 2340,
    price: 0,
    image: "🌾",
    description: "Perfect for secondary students and beginner farmers. Learn soil preparation, planting techniques, and proper harvesting.",
    thumbnail: "https://picsum.photos/id/1015/300/200",
    lessons: [
      { id: 101, title: "Soil Preparation", content: "https://www.youtube.com/embed/VIDEO_ID", duration: "25 min" },
      { id: 102, title: "Planting Techniques", content: "https://www.youtube.com/embed/VIDEO_ID", duration: "30 min" },
      { id: 103, title: "Harvesting & Storage", content: "https://www.youtube.com/embed/VIDEO_ID", duration: "20 min" }
    ]
  },
  {
    id: 2,
    title: "Advanced Poultry Management",
    instructor: "Dr. Fatima Yusuf",
    category: "Livestock",
    level: "Tertiary",
    duration: "6 weeks",
    lessonsCount: 18,
    rating: 4.9,
    students: 1450,
    price: 0,
    image: "🐔",
    description: "Complete guide to modern poultry farming, disease control, and profitable egg & meat production.",
    thumbnail: "https://picsum.photos/id/1077/300/200",
    lessons: [
      { id: 201, title: "Broiler vs Layer Management", content: "https://www.youtube.com/embed/VIDEO_ID", duration: "35 min" },
      { id: 202, title: "Common Diseases & Vaccination", content: "https://www.youtube.com/embed/VIDEO_ID", duration: "28 min" }
    ]
  },
  {
    id: 3,
    title: "Sustainable Irrigation Systems",
    instructor: "Engr. Chukwudi Eze",
    category: "Technology",
    level: "Commercial Farmers",
    duration: "5 weeks",
    lessonsCount: 15,
    rating: 4.8,
    students: 980,
    price: 0,
    image: "💧",
    description: "Learn drip irrigation, sprinkler systems, and water conservation techniques for better yields.",
    thumbnail: "https://picsum.photos/id/201/300/200",
    lessons: []
  },
  {
    id: 4,
    title: "Fish Farming (Aquaculture)",
    instructor: "Mrs. Ngozi Okoro",
    category: "Fisheries",
    level: "Beginner to Intermediate",
    duration: "7 weeks",
    lessonsCount: 22,
    rating: 4.6,
    students: 760,
    price: 0,
    image: "🐟",
    description: "Start your own catfish or tilapia farm with modern techniques and business strategies.",
    thumbnail: "https://picsum.photos/id/133/300/200",
    lessons: []
  },
  {
    id: 5,
    title: "Agribusiness & Farm Management",
    instructor: "Prof. Ibrahim Musa",
    category: "Agribusiness",
    level: "Intermediate",
    duration: "8 weeks",
    lessonsCount: 20,
    rating: 4.9,
    students: 1120,
    price: 0,
    image: "💼",
    description: "Turn your farm into a profitable business – marketing, record keeping, and financial management.",
    thumbnail: "https://picsum.photos/id/180/300/200",
    lessons: []
  }
];

export default courses;