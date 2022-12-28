import Navigation from './frontend/navigation';
import Footer from './frontend/footer';
export default function frontend({ children }) {
    return (
      <>
        <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        <Navigation/>
        <main>{children}</main>
        <Footer />
      </>
    )
  }