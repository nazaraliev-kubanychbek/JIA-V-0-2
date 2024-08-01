import { DescriptionSection } from "@components/index";
import { FirstSection } from "./FundsSections";


export const FundsPage = () => {
    return (
        <div style={{minHeight: '100vh'}}>
            <DescriptionSection text={'источники финансирования'} />
            <FirstSection />
        </div>
    );
}

