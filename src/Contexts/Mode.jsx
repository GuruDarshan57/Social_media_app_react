import React, { createContext, useState } from 'react'

const Theme = createContext();

const Mode = (props) => {
    const [mode, Setmode] = useState("light_mode")
    const [usr, Setusr] = useState(1)
    const context = { mode, Setmode, usr, Setusr }
    return (
        <Theme.Provider value={context}>{props.children}</Theme.Provider>
    )
}

export default Mode
export { Theme }