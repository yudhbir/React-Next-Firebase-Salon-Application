import Header from './backend/header';
import Footer from './backend/footer';
import Head from "next/head";
import { useEffect } from 'react';
import { validate_authentication } from '../../contexts/auth';
export default function backend({ children }) {
  useEffect(() => {
    validate_authentication();
  });
    return (
      <>
        <div>
            <Head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta content="width=device-width, initial-scale=1.0" name="viewport" />            
              <meta content="" name="keywords" />
              <meta content="" name="description" />
              <link id="theme-style" rel="stylesheet" href="/assets/css/portal.css"></link>
              <link rel="stylesheet" href="/assets/plugins/fontawesome/css/fontawesome.css"></link>
              <script src="/assets/plugins/popper.min.js"></script>
              <script src="/assets/plugins/bootstrap/js/bootstrap.min.js"></script>                      
            </Head>
            <div className="app"> 
                <Header />
                    <div className="app-wrapper">
                        <main>{children}</main>
                    </div>
                <Footer />
                <script src="/assets/plugins/chart.js/chart.min.js"></script> 
                <script src="/assets/js/index-charts.js"></script>   
                <script src="/assets/js/app.js"></script>
            </div>
          </div>
      </>
    )
  }