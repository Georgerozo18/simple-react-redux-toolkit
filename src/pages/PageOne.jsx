import { useSelector } from 'react-redux'
import { PageContainer } from '../components/PageContainer'

export const PageOne = () => {
    const { color_page_one } = useSelector(state => state.page_one_slice)

    return (
        <PageContainer backgroundColor={color_page_one} appTitle={'Page One'}>

        </PageContainer>
    )
}
