import { styled } from "../theme";

export default styled.div`
    width: 100%;
    flex-grow: 1;

    background-size: 8px 8px;
    background-image:
        linear-gradient(rgba(0,0,0,.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,.3) 1px, transparent 1px);
`;
