import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import WebLayout from 'layout/WebLayout';

// login option 3 routing
const MgiWebsiteFree = Loadable(lazy(() => import('views/utilities/Websites/MgiWebsiteFree/MgiWebsiteFree')));
const HeroSection = Loadable(lazy(() => import('views/utilities/Websites/MgiWebsiteFree/HeroSection')));
const MgiWebsitePaid = Loadable(lazy(() => import('views/utilities/Websites/MgiWebsitePaid/MgiWebsitePaid')));
const MgiTutorialsWebsite = Loadable(lazy(() => import('views/utilities/Websites/MgiTutorialsWebsite/MgiTutorialsWebsite')));

const ServiceSection = Loadable(lazy(() => import('views/utilities/Websites/MgiWebsiteFree/ServiceSection')));
const AboutSection = Loadable(lazy(() => import('views/utilities/Websites/MgiWebsiteFree/AboutSection')));
const MembershipSection = Loadable(lazy(() => import('views/utilities/Websites/MgiWebsiteFree/MembershipSection')));
const ContactUs = Loadable(lazy(() => import('views/utilities/Websites/MgiWebsiteFree/ContactUs')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const WebsitesRoutes = {
  path: '/',
  element: <WebLayout />,
  children: [
    {
      path: '/',
      element: <MgiWebsiteFree />
    },
    {
      path: '/mgiwebsitepaid',
      element: <MgiWebsitePaid />
    },
    {
      path: '/mgitutorialswebsite',
      element: <MgiTutorialsWebsite />
    },

    // ****** Links from Mgi Websites Free ****** //
    
    {
      path: '/home',
      element: <HeroSection />
    }
    ,
    {
      path: '/services',
      element: <ServiceSection />
    }
    ,
    {
      path: '/about',
      element: <AboutSection />
    }
    ,
    {
      path: '/membership',
      element: <MembershipSection />
    }
    ,
    {
      path: '/contactus',
      element: <ContactUs />
    }
    
  ]
};

export default WebsitesRoutes;
