export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  image: string;
  bio: string;
  availability: string[];
  consultation_fee: number;
  location: string;
  qualifications: string[];
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Aria Blackwell",
    specialization: "Cardiologist",
    experience: 15,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Dr. Blackwell is a renowned cardiologist with expertise in interventional cardiology and heart failure management.",
    availability: ["Mon", "Wed", "Fri"],
    consultation_fee: 200,
    location: "Heart Center, Medical District",
    qualifications: ["MD - Cardiology", "Fellowship - Interventional Cardiology", "Board Certified"]
  },
  {
    id: "2",
    name: "Dr. Zara Chen",
    specialization: "Dermatologist",
    experience: 12,
    rating: 4.8,
    image: "https://thumbs.dreamstime.com/b/portrait-indian-doctor-portrait-male-indian-doctor-serious-expression-crossed-arms-wearing-white-coat-having-open-137577527.jpg?w=992",
    bio: "Specialist in cosmetic dermatology and advanced skin treatments with a focus on innovative laser therapies.",
    availability: ["Tue", "Thu", "Sat"],
    consultation_fee: 150,
    location: "Skin Care Clinic, Downtown",
    qualifications: ["MD - Dermatology", "Fellowship - Cosmetic Dermatology", "Laser Therapy Certified"]
  },
  {
    id: "3",
    name: "Dr. Marcus Sterling",
    specialization: "Orthopedic Surgeon",
    experience: 18,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Leading orthopedic surgeon specializing in sports medicine and minimally invasive joint replacement.",
    availability: ["Mon", "Wed", "Thu"],
    consultation_fee: 250,
    location: "Sports Medicine Center",
    qualifications: ["MD - Orthopedic Surgery", "Fellowship - Sports Medicine", "Arthroscopy Specialist"]
  },
  {
    id: "4",
    name: "Dr. Luna Rodriguez",
    specialization: "Pediatrician",
    experience: 10,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Dedicated pediatrician with a gentle approach to child healthcare and developmental pediatrics expertise.",
    availability: ["Mon", "Tue", "Wed", "Fri"],
    consultation_fee: 120,
    location: "Children's Health Center",
    qualifications: ["MD - Pediatrics", "Fellowship - Developmental Pediatrics", "Child Psychology Certified"]
  },
  {
    id: "5",
    name: "Dr. Kai Nakamura",
    specialization: "Neurologist",
    experience: 14,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Expert neurologist specializing in epilepsy treatment and advanced neuroimaging techniques.",
    availability: ["Tue", "Thu", "Fri"],
    consultation_fee: 220,
    location: "Neuroscience Institute",
    qualifications: ["MD - Neurology", "Fellowship - Epilepsy", "Board Certified Neurophysiologist"]
  },
  {
    id: "6",
    name: "Dr. Sophia Andersson",
    specialization: "Psychiatrist",
    experience: 11,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Compassionate psychiatrist focusing on anxiety disorders and cognitive behavioral therapy approaches.",
    availability: ["Mon", "Wed", "Thu", "Sat"],
    consultation_fee: 180,
    location: "Mental Health Wellness Center",
    qualifications: ["MD - Psychiatry", "Fellowship - Anxiety Disorders", "CBT Specialist Certification"]
  },
  {
    id: "7",
    name: "Dr. Evelyn Cross",
    specialization: "Ophthalmologist",
    experience: 16,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Leading eye surgeon with expertise in LASIK procedures and retinal diseases treatment.",
    availability: ["Tue", "Wed", "Fri"],
    consultation_fee: 190,
    location: "Vision Care Center",
    qualifications: ["MD - Ophthalmology", "Fellowship - Retinal Diseases", "LASIK Surgery Certified"]
  },
  {
    id: "8",
    name: "Dr. Dante Rossi",
    specialization: "Gastroenterologist",
    experience: 13,
    rating: 4.7,
    image: "https://thumbs.dreamstime.com/b/doctor-27017233.jpg?w=768",
    bio: "Specialist in digestive health with advanced endoscopy skills and inflammatory bowel disease expertise.",
    availability: ["Mon", "Thu", "Fri"],
    consultation_fee: 170,
    location: "Digestive Health Institute",
    qualifications: ["MD - Gastroenterology", "Fellowship - IBD", "Advanced Endoscopy Certified"]
  },
  {
    id: "9",
    name: "Dr. Amara Okafor",
    specialization: "Oncologist",
    experience: 17,
    rating: 4.8,
    image: "https://thumbs.dreamstime.com/b/dentist-girl-24255333.jpg?w=992",
    bio: "Dedicated oncologist with expertise in precision medicine and innovative cancer treatment protocols.",
    availability: ["Tue", "Wed", "Thu"],
    consultation_fee: 300,
    location: "Cancer Treatment Center",
    qualifications: ["MD - Oncology", "Fellowship - Precision Medicine", "Clinical Research Certified"]
  },
  {
    id: "10",
    name: "Dr. River Montgomery",
    specialization: "Emergency Medicine",
    experience: 9,
    rating: 4.6,
    image: "https://thumbs.dreamstime.com/b/medical-doctor-27010071.jpg?w=992",
    bio: "Emergency medicine physician with trauma care expertise and rapid response medical protocols.",
    availability: ["24/7"],
    consultation_fee: 160,
    location: "Emergency Department, General Hospital",
    qualifications: ["MD - Emergency Medicine", "Trauma Care Certified", "Advanced Life Support Instructor"]
  },
  {
    id: "11",
    name: "Dr. Phoenix Reeves",
    specialization: "Rheumatologist",
    experience: 13,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    bio: "Expert rheumatologist specializing in autoimmune conditions and inflammatory joint diseases.",
    availability: ["Mon", "Tue", "Thu"],
    consultation_fee: 180,
    location: "Rheumatology Clinic, University Hospital",
    qualifications: ["MD - Rheumatology", "Fellowship - Autoimmune Diseases", "Research in Biologics"]
  },
  {
    id: "12",
    name: "Dr. Sage Winters",
    specialization: "Endocrinologist",
    experience: 11,
    rating: 4.8,
    image: "https://thumbs.dreamstime.com/b/dentist-doctor-27677942.jpg?w=992",
    bio: "Specialized endocrinologist focusing on diabetes management and hormonal disorders treatment.",
    availability: ["Wed", "Thu", "Fri", "Sat"],
    consultation_fee: 190,
    location: "Endocrine Health Center",
    qualifications: ["MD - Endocrinology", "Fellowship - Diabetes Care", "Hormone Therapy Specialist"]
  }
];