import { Container, SimpleGrid } from "@mantine/core";
import { ScenarioCard } from "./ScenarioCard/ScenarioCard";
import { useScenarioQueries } from "../queries/useScenariosQuery";

export function Home() {
  const scenariosQuery = useScenarioQueries();
  if (!scenariosQuery.isSuccess) return;
  return (
    <Container size="md" p="md" pt="xl">
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {scenariosQuery.data.map((scenario) => (
          <ScenarioCard
            key={scenario.id}
            title={scenario.title}
            description={scenario.description}
            progress={scenario.progress}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
