import { useTheme } from '../hooks/useTheme'
import modeIcon from '../images/mode-icon.svg'
import './ThemeSelector.css'

export default function ThemeSelector() {
    const { changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img
                    onClick={toggleMode}
                    src={modeIcon}
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
                    alt='dark/light mode toggle icon' />
            </div>
        </div>
    )
}
