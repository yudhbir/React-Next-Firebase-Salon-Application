import Header from './backend/header';
import Navigation from './backend/navigation';
import Footer from './backend/footer';
import Head from "next/head";
export default function backend({ children }) {
    return (
      <>
        <div>
            <Head>            
                <meta content="" name="keywords" />
                <meta content="" name="description" />
                <link id="theme-style" rel="stylesheet" href="/assets/css/portal.css"></link>
                <link id="theme-style" rel="stylesheet" href="/assets/css/fontawesome.min.css"></link>
                <script src="/assets/plugins/popper.min.js"></script>
                <script src="/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
                <script src="/assets/plugins/chart.js/chart.min.js"></script> 
                <script src="/assets/js/index-charts.js"></script>           
            </Head>
            <div className="app"> 
                <Header />
                    <div className="app-wrapper">
                        <main>{children}</main>
                    </div>
                <Footer />
                <script src="/assets/js/app.js"></script>
            </div>
          </div>
      </>
    )
  }