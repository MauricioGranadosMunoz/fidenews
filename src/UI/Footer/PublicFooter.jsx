import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const PublicFooter = () => {
  return (
    <footer className="mt-auto footer public-footer">
        <div className='footer-main-content d-flex justify-content-center align-items-center'>
            <p>FOOTER FIDELITAS NEWS</p>
        </div>
        <div className='footer-copy-content d-flex justify-content-center align-items-center'>
            <p>© 2021 Copyright: FidelitasNews.com</p>
        </div>
    </footer>
  )
}
