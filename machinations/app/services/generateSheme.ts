import { useGenerate } from "../store/use-boardInfo";

export interface ITemplate {
    description: string;
    edgeType: string;
    iterationCounts: number;
    timeStep: number;
    gamesCount: number;
    elements: any;
}
export const generateSheme = (template: ITemplate | null, setDescription: (text: string) => void) => {
    if (template) {
        setDescription(template.description)
    }
    return 'no correct data'
}