import Navigation from './frontend/navigation';
import Footer from './frontend/footer';
import Head from "next/head";
export default function frontend({ children }) {
    return (
      <>
        <Head>
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta content="" name="keywords" />
          <meta content="" name="description" />
          <link href="/img/favicon.ico" rel="icon"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Oswald:wght@600&display=swap" rel="stylesheet"></link>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"></link>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"></link>
          <link href="/lib/animate/animate.min.css" rel="stylesheet"></link>
          <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"></link>
          <link href="/css/bootstrap.min.css" rel="stylesheet"></link>
          <link href="/css/style.css" rel="stylesheet"></link>
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
          <script src="/lib/wow/wow.min.js"></script>
          <script src="/lib/easing/easing.min.js"></script>
          <script src="/lib/waypoints/waypoints.min.js"></script>
          <script src="/lib/owlcarousel/owl.carousel.min.js"></script>
          <script src="/js/main.js"></script>
        </Head>
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