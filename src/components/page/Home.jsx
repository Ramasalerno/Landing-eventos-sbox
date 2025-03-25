import SectionLineUp from '../SectionLineUp'
import SectionPrincipal from '../SectionPrincipal'
import SectionSecondary from '../SectionSecondary'
import SectionTertiary from '../SectionTertiary'
import SectionTracks from '../SectionTracks'
import TextFondoBlanco from '../TextFondoBlanco'
import SectionRegistroPatrocinar from '../SectionRegistroPatrocinar'
import SectionMarcas from '../SectionMarcas'
import ScrollToTopButton from '../ScrollToTopButton'
import ButtonWhatsapp from '../ButtonWhatsapp'
import NavbarMenu from '../NavbarMenu'

const Home = () => {
    return (
        <>
            <ButtonWhatsapp />
            <ScrollToTopButton />

            <NavbarMenu />
            <SectionPrincipal />
            <TextFondoBlanco />
            <SectionSecondary />
            <SectionTertiary />
            <SectionLineUp />
            <SectionTracks />
            <SectionMarcas />
            <SectionRegistroPatrocinar />
        </>
    )
}

export default Home