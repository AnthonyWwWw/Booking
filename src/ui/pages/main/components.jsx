import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    position: relative;
`;

export const SearchBarWrapper = styled.div`
    position: absolute;
    left: 50%;
    max-width: 570px;
    border: 1px solid #d6d6d6;
    background-color: #FFFFFF;
    border-radius: 36px;
    height: 70px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.16);
    display: flex;
    transform: translate(-50%, -35px);

    @media (max-width: 600px) {
        width: 328px;
        height: 60px;
        align-items: center;
    }
`;

export const SearchBarForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 16px 0px 16px;
`;

export const SearchBarSubmit = styled.button`
    width: 40px;
    height: 40px;
    background-color: #EE685F;
    border-radius: 50%;
    margin-left: 82px;
    border: none;
    cursor: pointer;

    @media (max-width: 600px) {
        margin-left: 0px;
    }
`;

export const SearchBarConteinerWrapper =  styled.div`
    width: 328px;
`

export const SearchBarIcon = styled.img`

    @media (max-width: 600px) {
        width: 24px; 
        height: 24px;
    }
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    @media (max-width: 600px) {
    }
`;

export const SearchBarBox = styled.div`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;

    &:first-child {
        margin: 0px 99px 0px 25px;
        position: relative;

        @media (min-width: 600px){
             &::before {
            content: "";
            position: absolute;
            top: 0;
            right: -79px;
            width: 2px;
            background-color: #EBEBEB;
            height: 100%; 
        }
        }

        @media (max-width: 600px) {
            margin: 0;
        }
        

    }
`;

export const SearchBarInput = styled.input`
    color: #a3a3a3;
    padding-right: 1px;
    overflow: hidden;

    &.destination {
        width: 153px;

        @media (max-width: 600px) {
            width: 100px;
        }
    }

    &.data {
        width: 92px;

        @media (max-width: 600px) {
            width: 80px;
        }
    }
`;