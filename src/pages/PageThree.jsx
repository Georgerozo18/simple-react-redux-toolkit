import { useSelector } from 'react-redux'
import { PageContainer } from '../components/PageContainer'
import { ColorChanger } from '../components/ColorChanger'

export const PageThree = () => {
    const { color_page_three } = useSelector(state => state.page_three_slice)

    return (
        <PageContainer backgroundColor={color_page_three} appTitle={'Page Three'}>
            <p>On this page you can change the color of all pages</p>
            <ColorChanger />
        </PageContainer>
    )
}
