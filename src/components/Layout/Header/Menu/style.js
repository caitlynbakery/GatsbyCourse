import styled from 'styled-components';

export const MenuWrapper = styled.div`
margin: auto 0 auto auto;
display: flex;
`;

export const MenuItem = styled.div`
margin: auto 0;
padding: 0 16px;
line-height: 60px;
a{
    color: white;
    &:hover{
        color: #999;
    }
}
`;