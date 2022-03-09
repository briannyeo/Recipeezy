import { createContext } from "react";

export const BackgroundStylesContext = createContext({
    styles: {
        height: '',
        width: '',
        backgroundSize: '',
        backgroundPosition: '',
        background: '',
        backgroundAttachment: '',
        position: '',
        zIndex: 0,
    },
    setStyles: () => {},
})
