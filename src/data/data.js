// src/data/data.js

export const collegesData = [
  { id: 1, name: "IIT Delhi", location: "Delhi", rating: 4.8 },
  { id: 2, name: "BITS Pilani", location: "Pilani", rating: 4.5 },
  { id: 3, name: "NIT Trichy", location: "Trichy", rating: 4.3 },
  { id: 4, name: "SRM University", location: "Chennai", rating: 3.9 },
  { id: 5, name: "VIT Vellore", location: "Vellore", rating: 4.1 },
];

export const examsData = [
  { id: 1, name: "JEE Main", details: "National-level engineering entrance exam." },
  { id: 2, name: "NEET", details: "Medical entrance test for MBBS and BDS courses." },
  { id: 3, name: "CAT", details: "MBA entrance exam for IIMs and top B-schools." },
];

export const coursesData = [
  { id: 1, name: 'B.Tech', description: 'Engineering Course' },
  { id: 2, name: 'MBA', description: 'Business Administration' },
];


export const courseCategories = [
  { name: "Engineering", slug: "/categories/engineering" },
  { name: "Medicine", slug: "/categories/medicine" },
  { name: "Business", slug: "/categories/business" },
  { name: "Arts & Humanities", slug: "/categories/arts-humanities" },
  { name: "Law", slug: "/categories/law" },
  { name: "Computer Science", slug: "/categories/computer-science" },
];