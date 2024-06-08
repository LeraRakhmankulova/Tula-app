import { useGenerate } from "../store/use-boardInfo";

export interface ITemplate {
    description: string;
    edgeType: string;
    iterationCounts: number;
    timeStep: number;
    gamesCount: number;
    elements: any;
}
export const generateSheme = (template: ITemplate | null, setDescription: (text: string) => void, onChangeType: (type: string) => void, setGames: (count: number) => void, setIterations: (count: number) => void, setTime: (count: number) => void, generateNode: any) => {
    let type: string | null = 'Default';
    if (template) {
        if(template.edgeType === 'default') type = 'Default'
        if(template.edgeType === 'smooth') type = 'SmoothStep'
        if(template.edgeType === 'bezier') type = 'Bezier'
        setDescription(template.description)
        onChangeType(type)
        setGames(template.gamesCount)
        setIterations(template.iterationCounts)
        setTime(template.timeStep)
        template.elements.map((el: any) => {
            el.element_type === "node" ? generateNode(el.id, el.struct, el.label) : "close"
        })
    }
    return 'no correct data'
}