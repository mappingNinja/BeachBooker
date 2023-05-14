/* eslint-disable array-callback-return */
import { Helmet } from 'react-helmet-async';
import PartnerHero from './sections/PartnerHero';
import PartnerOverview from './sections/PartnerOverview';
import PartnerBeachBooker from './sections/PartnerBeachBooker';
import PartnerRestaurent from './sections/PartnerRestaurent';
import PartnerContact from './sections/PartnerContact';

export default function PartnerPage() {
    return (
        <>
            <Helmet>
                <title> Beach Booker | Beach Booker </title>
            </Helmet>
            <PartnerHero />
            <PartnerOverview />
            <PartnerBeachBooker />
            <PartnerRestaurent />
            <PartnerContact />
        </>
    );
}