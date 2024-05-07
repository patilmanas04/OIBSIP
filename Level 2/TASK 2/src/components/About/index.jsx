import React from 'react'
import styled from 'styled-components'
import image from '../../images/image2.jpg'

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: #F4F5F2;

    @media (max-width: 700px){
        flex-direction: column;
    }
`

const LeftSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;

    @media (max-width: 700px){
        width: 100%;
        border: none;
        padding: 20px;
        margin-top: 50px;
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    max-width: 450px;
    overflow: hidden;
    margin: 40px 0;

    @media (max-width: 450px){
        margin: 40px 0 0 0;
    }
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;

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
    text-align: left;
    width: 100%;
    line-height: 1;
    margin-bottom: 1rem;
    border-bottom: 2px solid #333;

    @media (max-width: 1220px){
        font-size: 3.5rem;
    }
`

const Description = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    color: #666;
    text-align: justify;
    width: 100%;

    @media (max-width: 1220px){
        font-size: 1rem;
    }
`

const About = () => {
    return(
        <Wrapper>
            <LeftSection>
                <ContentWrapper>
                    <Title>
                        Man in the Mask
                    </Title>
                    <Description>
                        Robert Downey Jr.'s journey is one of remarkable highs and inspiring comebacks. A child prodigy who started acting at a young age, he quickly captivated audiences with his undeniable talent. But his career path wasn't always smooth. Overcoming personal struggles, he emerged stronger, showcasing his unwavering dedication to his craft. Today, Robert Downey Jr. stands as a Hollywood icon, revered for his captivating performances, sharp wit, and undeniable charisma.
                    </Description>
                </ContentWrapper>
            </LeftSection>
            <RightSection>
                <ImageWrapper>
                    <Image src={image} alt="Robert Downey Jr."/>
                </ImageWrapper>
            </RightSection>
        </Wrapper>
    )
}

export default About