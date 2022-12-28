import Link from "next/link";
import { useRouter } from "next/router";
export default function navigation() {
    const router = useRouter();
    let active="active";
    return (
      <>       
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark  py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="mb-0 text-primary text-uppercase"><i className="fa fa-cut me-3"></i>Cut</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link href="/" className={`nav-item nav-link `+(router.pathname == "/" ? active : "")}>Home</Link>
                    <Link href="/users/about" className={`nav-item nav-link `+(router.pathname == "/users/about" ? active : "")}>About</Link>
                    <Link href="/users/services" className={`nav-item nav-link `+(router.pathname == "/users/services" ? active : "")}>Service</Link>
                    <Link href="/users/working" className={`nav-item nav-link `+(router.pathname == "/users/working" ? active : "")}>Working Hours</Link>
                    <Link href="/users/pricing" className={`nav-item nav-link `+(router.pathname == "/users/pricing" ? active : "")}>Pricing Plan</Link>                    
                    <Link href="/users/contact" className={`nav-item nav-link `+(router.pathname == "/users/contact" ? active : "")}>Contact</Link>
                </div>
                <Link href="/users/login" className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3"></i></Link>
            </div>
        </nav>        
      </>
    )
  }