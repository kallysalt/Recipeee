import { useTheme } from '../hooks/useTheme'
import modeIcon from '../image/mode-icon.svg'
import './ThemeSelector.css'

const colors = ['red', 'yellow', 'blue']

export default function ThemeSelector() {
    const {changeColor, changeMode, mode} = useTheme()
    const toggleMode = () => {
        changeMode(mode==='dark'?'light':'dark')
    }
    return (
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img 
                onClick={toggleMode} 
                src={modeIcon} 
                style={{filter:mode==='dark'?'invert(100%)':'invert(20%)'}} 
                alt='dark/light mode toggle icon' />
            </div>
            <div className='theme-buttons'>
                {colors.map(color => (
                    <div key={color} onClick={() => changeColor(color)} style={{background: color}} />
                ))}
            </div>
        </div>
    )
}