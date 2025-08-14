import { useQuery } from "@tanstack/react-query";

export const useScenarioQueries = () => {
  return useQuery({
    queryKey: ["scenarios", "list"],
    queryFn: () => {
      return Promise.resolve([
        {
          id: "1",
          title: "Difficult Customer Handling",
          description:
            "Chat with AI simulating people from different cultural backgrounds to practice being respectful, adaptable, and clear in diverse contexts",
          progress: 0,
        },
        {
          id: "2",
          title: "Job Interview Simulator",
          description:
            "Practice answering common and challenging interview questions with AI acting as a recruiter. Get feedback on your clarity, confidence, and body language cues.",
          progress: 5,
        },
        {
          id: "3",
          title: "Conflict Resolution Roleplay",
          description:
            "Engage in simulated workplace disputes with AI colleagues or managers to practice staying calm, listening actively, and reaching constructive agreements.",
          progress: 0,
        },
        {
          id: "4",
          title: "Public Speaking Rehearsal",
          description:
            "Deliver speeches or presentations to AI and receive instant feedback on tone, pacing, and clarity to captivate your audience.",
          progress: 22,
        },
        {
          id: "5",
          title: "Persuasive Pitch Coaching",
          description:
            "Practice presenting ideas to AI stakeholders or investors, focusing on persuasive techniques, storytelling, and answering tough questions.",
          progress: 0,
        },
      ]);
    },
  });
};
