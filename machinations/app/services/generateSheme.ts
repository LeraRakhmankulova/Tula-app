import { useGenerate } from "../store/use-boardInfo";

export interface ITemplate {
    description: string;
    edgeType: string;
    iterationCounts: number;
    timeStep: number;
    gamesCount: number;
    elements: any;
}
export const generateSheme = (template: ITemplate | null, setDescription: (text: string) => void, onChangeType: (type: string) => void) => {
    let type: string | null = 'Default';
    if (template) {
        if(template.edgeType === 'default') type = 'Default'
        if(template.edgeType === 'smooth') type = 'SmoothStep'
        if(template.edgeType === 'bezier') type = 'Bezier'
        setDescription(template.description)
        onChangeType(type)
    }
    return 'no correct data'
}