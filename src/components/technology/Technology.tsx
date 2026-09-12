import { use } from "react";

interface TechnologyProps{
    techPromise: Promise <Itechnology[]>
}
const Technology = ({techPromise}: TechnologyProps) => {
    console.log(techPromise);
    const technology =use(techPromise);
    console.log(technology, 'technology');
    return (
        <div>
            
        </div>
    );
};

export default Technology;