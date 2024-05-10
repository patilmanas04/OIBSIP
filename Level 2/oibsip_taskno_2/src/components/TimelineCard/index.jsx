import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 200px;
    height: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    text-align: left;
    width: 100%;
    line-height: 1;
    margin-bottom: 8px;

    @media (max-width: 1220px){
        font-size: 1.5rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: #666;
    text-align: left;
    width: 100%;
    line-height: 1.31;

    @media (max-width: 1220px){
        font-size: 1rem;
    }
`

const TimelineCard = (props) => {
    const { title, subtitle } = props

    return (
        <Wrapper>
            <ContentWrapper>
                <Title>
                    {title}
                </Title>
                <Subtitle>
                    {subtitle}
                </Subtitle>
            </ContentWrapper>
        </Wrapper>   
    )
}

export default TimelineCard