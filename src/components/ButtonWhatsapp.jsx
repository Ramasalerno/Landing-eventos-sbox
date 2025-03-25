import { FaWhatsapp } from 'react-icons/fa';
import './styles.css'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
const ButtonWhatsapp = () => {
    
    const phoneNumber = '+5491169631402'
    const message = 'Hola, te contacto para obtener mas info del evento';

    const openWhatsAppChat = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const tooltip = (
        <Tooltip id="whatsapp-tooltip">Haz clic aquí para hablar con un vendedor</Tooltip>
    );

    return (
        <OverlayTrigger placement="left" overlay={tooltip}>
            <div className="whatsapp-button" onClick={openWhatsAppChat}>
                <FaWhatsapp size={60} color="#fff" style={{ margin: '0px' }} />
            </div>
        </OverlayTrigger>
    )
}

export default ButtonWhatsapp