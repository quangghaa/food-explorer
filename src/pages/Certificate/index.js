import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CertificateTable from "../../components/CertificateTable";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const queryClient = new QueryClient();

const Certificate = () => {
    return (
        
            <QueryClientProvider client={queryClient}>
                <Header />
                <div className="body">
                    <div className="title">Accounts</div>
                    <hr />
                    <div className="subtitle">Other Infomation</div>
                    <CertificateTable />
                </div>

                <Footer />
            </QueryClientProvider>
        
    )
}

export default Certificate;