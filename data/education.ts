export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  date: string;
  note?: string;
}

export const education: EducationItem[] = [
  {
    degree: "Master of Legal Studies (MLS), Cybersecurity Law & Policy",
    school: "Texas A&M University School of Law",
    location: "Fort Worth, TX",
    date: "Starting 2027 · Expected 2028",
    note: "Admitted",
  },
  {
    degree: "Bachelor of Science in Computer Science (Software Engineering)",
    school: "University of Balamand",
    location: "Lebanon",
    date: "2017",
    note: "WES evaluation: U.S. bachelor's degree equivalent",
  },
];
