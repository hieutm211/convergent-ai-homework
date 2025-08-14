import { useQuery } from "@tanstack/react-query";

export const useScenarioQueries = () => {
  return useQuery({
    queryKey: ["scenarios", "list"],
    queryFn: () => {
      return Promise.resolve([
        {
          id: "1",
          title: "5.3 minor release (September 2022)",
          description:
            "Form context management, Switch, Grid and Indicator components improvements, new hook and 10+ other changes",
          progress: 23,
        },
        {
          id: "2",
          title: "5.3 minor release (September 2022)",
          description:
            "Form context management, Switch, Grid and Indicator components improvements, new hook and 10+ other changes",
          progress: 23,
        },
        {
          id: "3",
          title: "5.3 minor release (September 2022)",
          description:
            "Form context management, Switch, Grid and Indicator components improvements, new hook and 10+ other changes",
          progress: 23,
        },
        {
          id: "4",
          title: "5.3 minor release (September 2022)",
          description:
            "Form context management, Switch, Grid and Indicator components improvements, new hook and 10+ other changes",
          progress: 23,
        },
        {
          id: "5",
          title: "5.3 minor release (September 2022)",
          description:
            "Form context management, Switch, Grid and Indicator components improvements, new hook and 10+ other changes",
          progress: 23,
        },
      ]);
    },
  });
};
