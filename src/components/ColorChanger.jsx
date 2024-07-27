import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set_color_page_one } from '../redux/slices/page_one/page_one_slice'
import { set_color_page_two } from '../redux/slices/page_two/page_two_slice'
import { set_color_page_three } from '../redux/slices/page_three/page_three_slice'
import '../styles/componentes/ColorChangerContainer.css'

export const ColorChanger = () => {
    const dispatch = useDispatch()
    const [selectedPage, setSelectedPage] = useState('')
    const [color, setColor] = useState('#000000')

    // Obtención de los colores de las páginas desde el estado
    const { color_page_one } = useSelector(state => state.page_one_slice)
    const { color_page_two } = useSelector(state => state.page_two_slice)
    const { color_page_three } = useSelector(state => state.page_three_slice)

    // Efecto para actualizar el color cuando se cambia la página seleccionada
    useEffect(() => {
        switch (selectedPage) {
            case 'page_one':
                dispatch(set_color_page_one(color_page_one))
                setColor(color_page_one)
                break
            case 'page_two':
                dispatch(set_color_page_two(color_page_two))
                setColor(color_page_two)
                break
            case 'page_three':
                dispatch(set_color_page_three(color_page_three))
                setColor(color_page_three)
                break
            default:
                break
        }
    }, [selectedPage, color_page_one, color_page_two, color_page_three, dispatch])

    // Manejador de cambio de página
    const handlePageChange = (event) => {
        setSelectedPage(event.target.value)
    }

    // Manejador de cambio de color
    const handleColorChange = (event) => {
        const newColor = event.target.value
        setColor(newColor)
        switch (selectedPage) {
            case 'page_one':
                dispatch(set_color_page_one(newColor))
                break
            case 'page_two':
                dispatch(set_color_page_two(newColor))
                break
            case 'page_three':
                dispatch(set_color_page_three(newColor))
                break
            default:
                break
        }
    }

    return (
        <div className="colorChangerContainer">
            <select onChange={handlePageChange} value={selectedPage}>
                <option value="" disabled>Select a page</option>
                <option value="page_one">Page One</option>
                <option value="page_two">Page Two</option>
                <option value="page_three">Page Three</option>
            </select>
            <input
                type="color"
                className="color-input"
                value={
                    selectedPage === 'page_one' ? color_page_one :
                        selectedPage === 'page_two' ? color_page_two :
                            selectedPage === 'page_three' ? color_page_three :
                                '#000000' // Color por defecto cuando no hay selección
                }
                onChange={handleColorChange}
                disabled={!selectedPage} // Deshabilitado si no hay selección
            />
            <div
                className="color-display"
                style={{ backgroundColor: color }}
                onClick={() => document.querySelector('.color-input').click()} // Abre el selector de color al hacer clic
            ></div>
        </div>
    )
}
