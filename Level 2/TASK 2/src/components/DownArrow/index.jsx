import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 60px;
    height: 60px;
    border: 2px solid #000000;
    border-radius: 999px;
    position: absolute;
    
    background-color: #ffffff;
    cursor: pointer;
    transition: background-color 150ms ease-in-out;

    &:hover{
        background-color: #000000;
    }

    &:hover::before{
        border-color: #ffffff;
    }

    &::before{
        content: '';
        width: 7px;
        height: 7px;
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translate(-48%, -50%) rotate(45deg);
        border-bottom: 2px solid #000000;
        border-right: 2px solid #000000;
    }

    @media (max-width: 700px){
        display: none;
    }
`

const DownArrow = () => {
    const handleClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }

    return (
        <Wrapper onClick={handleClick}></Wrapper>
    )
}

export default DownArrow