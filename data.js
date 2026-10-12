// All website content lives here. Edit text, prices, timings and events without touching any other file.
window.HDS_DATA = {
  stats: [
    { value: 4.6, label: "Google rating", decimals: 1, suffix: "" },
    { value: 98, label: "Google reviews", suffix: "" },
    { value: 1000, label: "Students trained", suffix: "+" },
    { value: 10, label: "Years teaching", suffix: "+" }
  ],
  programs: [
    { title: "Bollywood", age: "All ages", dur: "60 min", desc: "High-energy, cinematic choreography set to the biggest Bollywood hits." },
    { title: "Hip Hop", age: "10+", dur: "60 min", desc: "Street style power moves, freestyle battles and urban grooves." },
    { title: "Contemporary", age: "12+", dur: "75 min", desc: "Fluid, expressive movement that tells a story through the body." },
    { title: "Kids Dance", age: "5 to 12", dur: "45 min", desc: "Fun, confidence-building classes designed for young dancers." },
    { title: "Wedding Choreography", age: "All ages", dur: "Custom", desc: "Signature first dances and sangeet performances, styled by Himani herself." },
    { title: "Zumba", age: "Adults", dur: "50 min", desc: "High-intensity dance fitness that burns calories and lifts your mood." },
    { title: "Freestyle", age: "10+", dur: "60 min", desc: "Explore your own movement vocabulary in an open, expressive format." },
    { title: "Fitness Dance", age: "Adults", dur: "50 min", desc: "Cardio-driven dance workouts built for strength, stamina and tone." }
  ],
  why: [
    ["Professional trainers", "Learn from trained, performing choreographers with years of stage experience."],
    ["Friendly environment", "A warm, inclusive studio culture where every dancer belongs."],
    ["Performance opportunities", "Regular showcases and stage time for students at every level."],
    ["Competition preparation", "Specialised coaching and rehearsal support for dance competitions."],
    ["Affordable fees", "Premium training with honest, transparent pricing."],
    ["Flexible timings", "Morning, evening and weekend batches built around your schedule."],
    ["Modern, air-conditioned studio", "Mirrored floors and a professional sound system."],
    ["Personal attention", "Small batch sizes with individual correction and consistent feedback."],
    ["Certified instructors", "Every instructor is certified and continually trained in current styles."],
    ["Comfortable space", "A cool, comfortable studio designed for focus and long rehearsal hours."]
  ],
  timetable: [
    { title: "Morning batch", time: "7:30 to 10:00 AM", rows: [["Mon", "Bollywood"], ["Tue", "Kids Dance"], ["Wed", "Zumba"], ["Thu", "Hip Hop"], ["Fri", "Contemporary"], ["Sat", "Zumba"]] },
    { title: "Evening batch", time: "4:00 to 8:00 PM", rows: [["Mon", "Hip Hop"], ["Tue", "Contemporary"], ["Wed", "Bollywood"], ["Thu", "Freestyle"], ["Fri", "Kids Dance"], ["Sat", "Bollywood"]] },
    { title: "Weekend batch", time: "Sat and Sun, 9:00 AM to 1:00 PM", rows: [["Sat", "Wedding Choreography"], ["Sun", "Open Practice"], ["Sun", "Workshops"]] }
  ],
  // Events whose "end" date has passed are hidden automatically.
  events: [
    { date: "August 2026", end: "2026-08-31", title: "Bollywood Fusion Intensive Workshop", desc: "A weekend workshop on modern Bollywood fusion technique, guest-led by industry choreographers." },
    { date: "September 2026", end: "2026-09-30", title: "Ahmedabad Dance Championship", desc: "HDS crews compete across solo, duo and group categories." },
    { date: "December 2026", end: "2026-12-31", title: "HDS Annual Show: Rhythms of Ahmedabad", desc: "Our flagship annual production featuring every batch, styled and directed by Himani Shah." },
    { date: "May 2027", end: "2027-05-31", title: "Summer Dance Camp", desc: "A high-energy summer camp for kids and teens with multiple styles, games and a closing performance." }
  ],
  plans: [
    { name: "Beginner", price: "1,999", feats: ["2 group classes per week", "Choice of 1 dance style", "Locker and studio access", "Monthly progress note"] },
    { name: "Intermediate", price: "3,499", popular: true, feats: ["Unlimited group classes", "Choice of 2 dance styles", "1 personal feedback session per month", "Priority workshop seats", "Access to studio events"] },
    { name: "Professional", price: "5,999", feats: ["Unlimited access, all styles", "Personal choreography sessions", "Performance opportunities", "Competition coaching", "Priority booking and flexible timing"] }
  ],
  team: [
    { name: "Himani Shah", role: "Founder and Lead Choreographer", bio: "Wedding choreography specialist with 10+ years of stage and studio experience.", photo: "images/studio-portrait.jpg" },
    { name: "Aarav Mehta", role: "Hip Hop Instructor", bio: "Battle-tested street dancer bringing raw energy to every hip hop session." },
    { name: "Riya Patel", role: "Contemporary Instructor", bio: "Trained in modern and contemporary technique, focused on expressive storytelling." },
    { name: "Kavya Joshi", role: "Zumba and Fitness Coach", bio: "Certified fitness instructor making cardio dance fun, safe and effective." }
  ],
  reviews: [
    { name: "Meera Desai", tag: "Google review", text: "Best dance studio in Ahmedabad, hands down. My daughter looks forward to class every single week." },
    { name: "Yash Rana", tag: "Google review", text: "Joined for fitness, stayed for the community. The instructors genuinely care about your progress." },
    { name: "Simran Kapoor", tag: "Google review", text: "HDS choreographed our sangeet and it was flawless. Professional, patient and incredibly talented." },
    { name: "Priya Shah", tag: "Contemporary, 2 years", text: "HDS gave me the confidence to perform on stage for the first time. Himani ma'am's attention to every student is unmatched." },
    { name: "Karan Mehta", tag: "Hip Hop, 1.5 years", text: "The energy in every class is incredible. I have grown so much as a dancer, and the studio feels like family." },
    { name: "Ananya Trivedi", tag: "Wedding Choreography", text: "Our sangeet performance was the highlight of the wedding, all thanks to HDS's incredible choreography." },
    { name: "Devansh Patel", tag: "Bollywood, 3 years", text: "Professional instructors, a beautiful studio and a genuine love for dance. HDS checks every box." },
    { name: "Riya Joshi", tag: "Zumba, 1 year", text: "I have lost weight, gained confidence, and actually look forward to workouts now. Best decision I made this year." }
  ],
  faqs: [
    ["Do you offer a free trial class?", "Yes. Every new student is welcome to one free trial class in any program before enrolling."],
    ["What age groups do you teach?", "We train dancers from age 5 through adult, with dedicated Kids Dance batches and adult classes across all styles."],
    ["Do I need prior dance experience?", "Not at all. Our Beginner track is built for complete newcomers, and instructors adapt the pace to every skill level."],
    ["Can HDS choreograph a wedding performance?", "Yes. Wedding choreography is one of our specialties, and Himani personally leads sangeet and first-dance packages."],
    ["What should I wear to my first class?", "Comfortable, stretchable clothing and clean indoor shoes, depending on style. We will guide you when you book your trial."]
  ]
};
