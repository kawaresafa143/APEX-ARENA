export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  price: number;
  sports?: string[];
}

export const trainers: Trainer[] = [
  { 
    id: "marcus", 
    name: "Coach Marcus", 
    role: "Head Tennis Pro", 
    price: 3500, 
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500",
    sports: ["Tennis"]
  },
  { 
    id: "sarah", 
    name: "Sarah Jenkins", 
    role: "Padel Specialist", 
    price: 3000, 
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=400&h=500",
    sports: ["Padel"]
  },
  { 
    id: "david", 
    name: "David Chen", 
    role: "Basketball Performance", 
    price: 4500, 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500",
    sports: ["Basketball"]
  },
  { 
    id: "elena", 
    name: "Elena Rossi", 
    role: "Yoga & Recovery", 
    price: 2500, 
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400&h=500",
    sports: ["Yoga", "Recovery"]
  },
  { 
    id: "james", 
    name: "James Wilson", 
    role: "Strength & Conditioning", 
    price: 3200, 
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=500",
    sports: ["Fitness"]
  },
  { 
    id: "maria", 
    name: "Maria Garcia", 
    role: "Squash Master", 
    price: 2800, 
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500",
    sports: ["Squash"]
  },
  { 
    id: "tom", 
    name: "Tom Baker", 
    role: "Nutrition Specialist", 
    price: 2000, 
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400&h=500",
    sports: ["Nutrition"]
  },
  { 
    id: "anna", 
    name: "Anna Smith", 
    role: "Mental Performance", 
    price: 3800, 
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
    sports: ["Mental"]
  }
];
