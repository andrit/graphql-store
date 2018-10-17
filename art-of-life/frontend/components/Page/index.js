import React, { Component } from 'react';
import Header from '../Header';
import Meta from '../Meta';
import {ThemeProvider, injectGlobal} from 'styled-components';
import {theme} from '../styles/Theme';
import {StyledPage} from './StyledPage';
import {InnerStyle} from './InnerStyle';
import { GlobalStyles } from '../styles/GlobalStyles';




class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <InnerStyle>
                        {this.props.children}
                    </InnerStyle>    
                </StyledPage>
            </ThemeProvider>
            
        );
    }
}

export default Page;