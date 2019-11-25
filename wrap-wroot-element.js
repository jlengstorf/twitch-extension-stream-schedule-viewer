import React from 'react'
import { MyThemeContext } from './src/contexts/theme-context'
import theme from './src/theme'

export default ({ element }) => (
    <MyThemeContext.Provider value={{
        theme,
        components:{}
    }} >
        {element}
    </MyThemeContext.Provider>
)