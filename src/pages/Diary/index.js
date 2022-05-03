import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import DiaryTable from "../../components/DiaryTable";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const queryClient = new QueryClient();

const Diary = () => {
    return (
        
            <QueryClientProvider client={queryClient}>
                <Header />
                <div className="body">
                    <div className="title">Accounts</div>
                    <hr />
                    <div className="subtitle">Other Infomation</div>
                    <DiaryTable />
                </div>

                <Footer />
            </QueryClientProvider>
        
    )
}

export default Diary;