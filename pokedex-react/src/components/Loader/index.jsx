import { DotSpinner } from "@uiball/loaders";
import { Div } from "./styles";

export const Loader = () => {
    return (
        <Div>
            <DotSpinner size={40} speed={0.9} color="black" />
        </Div>
    )
}