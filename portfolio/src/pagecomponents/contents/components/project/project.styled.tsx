import styled from "styled-components";

const StyledProjectComponent = styled.div`
  width: 100%;
  margin-top: 3%;
`;

const StyledProjectContainer = styled.div`
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
`;

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 0 8px ${(props) => props.theme.colors.lightmain};
`;

const StyledProjectCardImage = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  width: 250px;
  height: 150px;
`;

const StyledProjectTitle = styled.div`
  width: 100%;
  font-family: ${(props) => props.theme.fonts.KoreaFontRegular};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-top: 15px;
`;

const StyledProjectPeriod = styled.div`
  width: 100%;
  font-family: ${(props) => props.theme.fonts.KoreaFontRegular};
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: ${(props) => props.theme.colors.gray};
`;

const StyledProjectInfomation = styled.div`
  width: 250px;
  font-family: ${(props) => props.theme.fonts.KoreaFontRegular};
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  margin-top: 15px;
`;

const StyledProjectSkillContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const StyledProjectSkillImage = styled.img.attrs<any>((props) => ({
  src: props.src,
}))`
  width: 25px;
  height: 25px;
`;

const StyledBottomContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;

const StyledProjectGitContainer = styled.div`
  width: 80px;
`;

const StyledProjectGitBox = styled.div`
  display: flex;
`;

const StyledGitHubimg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const StyledGitHubFont = styled.div`
  font-family: ${(props) => props.theme.fonts.KoreaFontRegular};
  font-size: ${(props) => props.theme.fontSizes.xsmall};
`;

const StyledProjectDetailContainer = styled.div`
  display: flex;
`;

const StyledProjectDetailImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const StyledDetailFont = styled.div`
  font-family: ${(props) => props.theme.fonts.KoreaFontRegular};
  font-size: ${(props) => props.theme.fontSizes.xsmall};
`;

export {
  StyledProjectComponent,
  StyledProjectContainer,
  StyledProjectCard,
  StyledProjectCardImage,
  StyledProjectTitle,
  StyledProjectPeriod,
  StyledProjectInfomation,
  StyledProjectSkillContainer,
  StyledProjectSkillImage,
  StyledBottomContainer,
  StyledProjectGitContainer,
  StyledProjectGitBox,
  StyledGitHubimg,
  StyledGitHubFont,
  StyledProjectDetailContainer,
  StyledProjectDetailImg,
  StyledDetailFont,
};
