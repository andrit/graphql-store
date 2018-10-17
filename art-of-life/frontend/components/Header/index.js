import Nav from '../Nav';
import Link from 'next/link';
import {Logo} from '../Logo';
import {StyledHeader} from './StyledHeader';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    console.log('onRouteChangeStart Triggered');
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    console.log('onRouteChangeComplete Triggered');
    NProgress.done();
}
Router.onRouteChangeError = () => {
    console.log('onRouteChangeError Triggered');
    NProgress.done();
}

const Header = () => (
    <StyledHeader>
        <div className="bar">
            <Link href="/"><Logo><a><sup>The</sup> Art <span>of</span> Life</a></Logo></Link>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>
            Cart
        </div>
    </StyledHeader>

)

export default Header;