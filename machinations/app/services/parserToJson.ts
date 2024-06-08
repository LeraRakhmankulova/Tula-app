export const parserToJson = (description: string, currentType: string, iterations: number, games: number, time: number): string => {
    return `{
  "description": "${description}",
  "edge_type": "${currentType.toLowerCase()}",
  "iteration_counts": ${iterations},
  "time_step": ${time},
  "games_count": ${games},
  "elements": [
    {
      "id": 1,
      "element_type": "node",
      "struct": "source",
      "label": "generator"
    },
    {
      "id": 2,
      "element_type": "node",
      "struct": "end",
      "label": "wood"
    },
    {
      "id": 3,
      "element_type": "edge",
      "source_id": 1,
      "target_id": 2,
      "value": 4
    }
  ]
}`
}