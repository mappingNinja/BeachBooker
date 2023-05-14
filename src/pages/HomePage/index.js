/* eslint-disable array-callback-return */
import { Helmet } from 'react-helmet-async';
import ProductHero from './sections/ProductHero';
import ProductPartnerBeach from './sections/ProductPartnerBeach';
import ProductBeachBooker from './sections/ProductBeachBooker';
import ProductConnect from './sections/ProductConnect';
import ProductPartner from './sections/ProductPartner';

export default function HomePage() {

    return (
        <>
            <Helmet>
                <title> Beach Booker | Beach Booker </title>
            </Helmet>
            <ProductHero />
            <ProductPartnerBeach />
            <ProductBeachBooker />
            <ProductConnect />
            <ProductPartner />
        </>
    );
}
