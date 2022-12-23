import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justifiy-content: space-between;
`

// export const TextContent = styled.p`
//     font-family: 'Open sans';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     width: 420px;
//     margin-bottom: 20px;
//     line-height: 22px;

//     color: #fff;
// `
export const TittleHighLight = styled.h3`
    color: #FFFFFF70;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 24px;
`
export const Tittle = styled.h3`
    font-family: 'Open sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #fff;
`
export const Column = styled.div`
    flex: ${({flex}) => flex};
    padding-right: 24px;
`