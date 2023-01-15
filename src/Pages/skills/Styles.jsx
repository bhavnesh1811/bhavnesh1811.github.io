import styled from 'styled-components';

export const SkillsDiv = styled.div`
    width: 100%;
    padding: 6px 0;
`;
export const SkillsContainer = styled.div`
    width: 90%;
    margin: 0 auto;
`;
export const Common = styled.div`
    /* width: 30%; */
    margin: 20px auto;
    text-align: center;
    /* justify-content: space-around; */
`;
export const H1 = styled.h1`
    font-size: 32px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.fontColorPrimary};
`;
export const Col = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`;

export const BoxDiv = styled.div`
    text-align: center;
    width: 220px;
`;

export const SkillBox = styled.div`
    padding: 40px;
    background: ${(props) => props.theme.cardColor};
    color: ${(props) => props.theme.fontColorSecondary};
    box-shadow: 0px 12px 24px rgb(2 30 84 / 10%);
    margin: 20px;
    transition: all 0.5s linear;
    &:hover {
        background: ${(props) => props.theme.commonBorder};
        color: ${(props) => props.theme.fontColorHeaderHover};
    }
`;

export const SkillBoxText = styled.p`
    font-size: 14px;
    font-weight: 500;
`;
