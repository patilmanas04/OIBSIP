import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import image from '../../images/image1.png'
import DownArrow from '../DownArrow'

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    border-bottom: 1px solid #000000;

    @media (max-width: 700px){
        flex-direction: column;
        height: 800px;
    }
`

const LeftSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    border-right: 1px solid #000000;

    @media (max-width: 700px){
        width: 100%;
        border: none;
        padding: 20px;
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    max-width: 450px;
    overflow: hidden;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    transition: transform 500ms ease-in-out;

    &:hover{
        transform: scale(1.05);
    }
`

const RightSection = styled.div`
    background-color: #F4F5F2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    border-left: 1px solid #000000;

    @media (max-width: 700px){
        width: 100%;
        border: none;
    }
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
`

const Title = styled.h1`
    font-size: 5rem;
    font-weight: 700;
    color: #333;
    text-align: center;
    width: 100%;
    line-height: 1;

    @media (max-width: 1220px){
        font-size: 3.5rem;
    }
`

const Tagline = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: #666;
    text-align: center;
    width: 100%;

    @media (max-width: 1220px){
        font-size: 1.5rem;
    }
`

const HeroSection = () => {
    return (
        <Wrapper>
            <LeftSection>
                <ImageWrapper>
                    <Image src={image} alt="Robert Downey Jr."/>
                </ImageWrapper>
            </LeftSection>
            <DownArrow/>
            <RightSection>
                <ContentWrapper>
                    <Title>
                        Robert Downey Jr.
                    </Title>
                    <Tagline>
                        A Story of Redemption and Rise.
                    </Tagline>
                </ContentWrapper>
            </RightSection>
        </Wrapper>
    )
}

export default HeroSection