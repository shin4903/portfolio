import styled from "styled-components";

const StyledProfileComponent = styled.div`
  width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
`;

const StyledProfileTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.KoreaFontExtraBold};
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  color: ${(props) => props.theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const StyledProfileimgContainer = styled.div`
  width: 300px;
  height: 480px;
  border: 1px solid black;
`;
const StyledProfileInfoContainer = styled.div`
  margin-left: 100px;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightmain};
`;

const StyledProfileContentContainer = styled.div`
  display: flex;
  margin-top: 3%;
`;

const StyledProfileContentMain = styled.div`
  font-family: ${(props) => props.theme.fonts.KoreaFontExtraBold};
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.main};
`;

const StyledProfileContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledProfileContentTitle = styled.div`
  width: 150px;
  font-family: ${(props) => props.theme.fonts.KoreaFontBold};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  align-items: center;
`;
const StyledProfileContentTitle2 = styled.div`
  width: 150px;
  font-family: ${(props) => props.theme.fonts.KoreaFontRegular};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.black};
`;

const StyledProfileContent = styled.div`
  width: 320px;
  font-family: ${(props) => props.theme.fonts.KoreaFontRegular};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
  display: flex;
  align-items: center;
`;

const StyledProfileContentLink = styled.a`
  width: 300px;
  font-family: ${(props) => props.theme.fonts.KoreaFontRegular};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
  text-decoration: none;
`;

export {
  StyledProfileComponent,
  StyledProfileTitle,
  StyledProfileContainer,
  StyledProfileimgContainer,
  StyledProfileInfoContainer,
  StyledProfileContentContainer,
  StyledProfileContentMain,
  StyledProfileContentBox,
  StyledProfileContentTitle,
  StyledProfileContentTitle2,
  StyledProfileContent,
  StyledProfileContentLink,
};
