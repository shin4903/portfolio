import styled from "styled-components";

const StyledContentsComponent = styled.div`
  width: 100%;
  margin-top: 5%;
  padding-bottom: 30px;
`;
const StyledMenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMenuButton = styled.button.attrs<any>(() => ({}))`
  width: 100px;
  font-family: ${(props) => props.theme.fonts.KoreaFontBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  background-color: ${(props) =>
    props.state === props.name
      ? props.theme.colors.lightmain
      : props.theme.colors.white};
  border: none;
`;
export { StyledContentsComponent, StyledMenuContainer, StyledMenuButton };
