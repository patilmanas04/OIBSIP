import React from 'react'
import styled from 'styled-components'
import image from '../../images/image3.jpg'

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: #F4F5F2;
    margin: 50px 0 30px 0;
`

const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    max-width: 900px;
    overflow: hidden;
    margin-top: 50px;

    @media (max-width: 900px){
        margin-top: 0;
        max-width: 100%;
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

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-top: 50px;
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

const Description = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    color: #666;
    text-align: justify;
    width: 100%;
    margin-top: 30px;

    @media (max-width: 1220px){
        font-size: 1rem;
    }
`

const ImpactAndLegacy = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={image} alt="ironman" />
            </ImageWrapper>
            <ContentWrapper>
                <Title>
                    Iron Man's Enduring Legacy: The Downey Effect on Hollywood
                </Title>
                <Description>
                    Robert Downey Jr.'s impact on the film industry is nothing short of extraordinary. He breathed life and complexity into the iconic Iron Man character, launching the Marvel Cinematic Universe into a global phenomenon. His charismatic portrayal set a new standard for superhero films, proving that these characters could be more than just one-dimensional heroes.
                    <br /><br />
                    But Robert Downey Jr.'s influence extends far beyond the realm of superheroes. Throughout his career, he has captivated audiences with his remarkable versatility. From the dramatic intensity of Chaplin to the comedic brilliance of Tropic Thunder, he consistently delivers unforgettable performances. His ability to seamlessly transition between genres has solidified his place as a Hollywood A-lister and a true acting powerhouse.
                    <br /><br />
                    The "Downey Effect" isn't just about box office numbers and critical acclaim. He has inspired countless aspiring actors with his unwavering passion and dedication to his craft. His journey of resilience, overcoming personal struggles, and ultimately achieving phenomenal success is a testament to the power of hard work and perseverance.
                </Description>
            </ContentWrapper>
        </Wrapper>
    )
}

export default ImpactAndLegacy