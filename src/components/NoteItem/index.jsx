import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function NoteItem({ isnew, value, onClick, ...rest }) {
    return(
        <Container $isnew={isnew}>
            <div className="tag" value={value} readOnly={!isnew} {...rest}>
                { isnew ? "Tag" : value }
            </div>
            
            <button
                type="button"
                onClick={onClick}
            >
                {isnew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}