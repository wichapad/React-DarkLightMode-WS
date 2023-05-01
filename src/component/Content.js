import light from '../image/light.svg'
import dark from '../image/dark.svg'
import { useContext } from 'react'
import { themeContext } from '../App'


const Content = () => {

    const { theme } = useContext(themeContext)
    return (
        <main className={theme === "dark" ? "dark" : "light"}>
            <div>
                <h1>Noah</h1>
                <p>{theme}Mode Workshop</p>

            </div>
            <img src={theme === "dark" ? dark : light} alt="logo" />
        </main>
    )

}

export default Content