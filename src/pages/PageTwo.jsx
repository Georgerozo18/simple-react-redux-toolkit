import { useSelector } from 'react-redux'
import { PageContainer } from '../components/PageContainer'

export const PageTwo = () => {
    const { color_page_two } = useSelector(state => state.page_two_slice)

    return (
        <PageContainer backgroundColor={color_page_two} appTitle={'Page Two'}>

        </PageContainer>
    )
}
