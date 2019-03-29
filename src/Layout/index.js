import React from 'react';
import { Box } from 'grommet';
import styled from 'styled-components';
import Nav from '../Components/Nav';
import SideMenu from '../Components/SideMenu';
import Footer from '../Components/Footer';



const Layout = (props) => {
    return(
        <Box>
            <Box>
                <Nav />
            </Box>
            <Box>
                <SideMenu />
            </Box>
            <Box>
                <div>
                    {props.children}
                </div>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
        );
    };

export default Layout;
