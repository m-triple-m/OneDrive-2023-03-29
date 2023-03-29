import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import mp from './assets/mp.png';

const MarketplaceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MarketHead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const MarketHeader = styled.h1`
    height: 58px;
    width: 417px;
    font-family: Orbitron;
    font-size: 60px;
    font-weight: 900;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: center;
`;
const MarketHeadDescription = styled.h3`
    height: 128px;
    width: 785px;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: -10px;
`;
const MarketCover = styled.div`
height: 692px;
width: 1476px;
margin-top: 20px;
background: url(${mp}) no-repeat;
`;


const Marketplace = () => {
    return (
        <>
            <MarketplaceContainer>
                <MarketHead>
                    <MarketHeader>
                        Marketplace
                    </MarketHeader>
                    <MarketHeadDescription>
                        Lorem ipsum dolor sit amet,
                        consectetuer adi-piscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
                        Lorem ipsum dolor sit amet, consectetuer adi-piscing elit.
                    </MarketHeadDescription>
                    <Button>START NOW</Button>
                    <MarketCover></MarketCover>            
                </MarketHead>


            </MarketplaceContainer>
        </>
    )
}

export default Marketplace