import React from "react";
import {
  StyledProfileComponent,
  StyledProfileTitle,
  StyledProfileSub,
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
} from "./profile.styled";

const Profile = () => {
  return (
    <StyledProfileComponent>
      <StyledProfileTitle>
        성취! 성공을 취하는 개발자 신종혁입니다.
      </StyledProfileTitle>
      {/* <StyledProfileSub>123</StyledProfileSub> */}
      <StyledProfileContainer>
        <StyledProfileimgContainer></StyledProfileimgContainer>
        <StyledProfileInfoContainer>
          <StyledProfileContentMain>Information</StyledProfileContentMain>
          <StyledProfileContentBox>
            <StyledProfileContentContainer>
              <StyledProfileContentTitle>Name</StyledProfileContentTitle>
              <StyledProfileContent>신종혁</StyledProfileContent>
            </StyledProfileContentContainer>
            <StyledProfileContentContainer>
              <StyledProfileContentTitle>Tel </StyledProfileContentTitle>
              <StyledProfileContent>010-4903-2661</StyledProfileContent>
            </StyledProfileContentContainer>
            <StyledProfileContentContainer>
              <StyledProfileContentTitle>E-mail</StyledProfileContentTitle>
              <StyledProfileContent>shinjh4903@gmail.com</StyledProfileContent>
            </StyledProfileContentContainer>
            <StyledProfileContentContainer>
              <StyledProfileContentTitle>GitHub</StyledProfileContentTitle>
              <StyledProfileContentLink href="https://github.com/shin4903">
                https://github.com/shin4903
              </StyledProfileContentLink>
            </StyledProfileContentContainer>
          </StyledProfileContentBox>
          <StyledProfileContentMain style={{ marginTop: "5%" }}>
            Experience
          </StyledProfileContentMain>
          <StyledProfileContentBox>
            <StyledProfileContentContainer>
              <StyledProfileContentTitle2>2024.01 ~</StyledProfileContentTitle2>
              <StyledProfileContent>삼성중공업</StyledProfileContent>
            </StyledProfileContentContainer>
            <StyledProfileContentContainer>
              <StyledProfileContentTitle2>
                2023.01 ~ 2023.12
              </StyledProfileContentTitle2>
              <StyledProfileContent>삼성 청년 SW 아카데미</StyledProfileContent>
            </StyledProfileContentContainer>
            <StyledProfileContentContainer>
              <StyledProfileContentTitle2>
                2017.03 ~ 2023.02
              </StyledProfileContentTitle2>
              <StyledProfileContent>
                창원대학교 조선해양공학과
              </StyledProfileContent>
            </StyledProfileContentContainer>
          </StyledProfileContentBox>
          <StyledProfileContentMain style={{ marginTop: "5%" }}>
            Awards / Certificates
          </StyledProfileContentMain>
          <StyledProfileContentBox>
            <StyledProfileContentContainer>
              <StyledProfileContentTitle>2023.11 </StyledProfileContentTitle>
              <StyledProfileContent>
                삼성 청년 SW 아카데미 2학기 공통프로젝트 우수상
                (삼성전자주식회사)
              </StyledProfileContent>
            </StyledProfileContentContainer>
            <StyledProfileContentContainer>
              <StyledProfileContentTitle>2023.02</StyledProfileContentTitle>
              <StyledProfileContent>학과 수석 졸업</StyledProfileContent>
            </StyledProfileContentContainer>
            <StyledProfileContentContainer>
              <StyledProfileContentTitle>2022.06</StyledProfileContentTitle>
              <StyledProfileContent>
                일반기계기사 (한국산업인력공단)
              </StyledProfileContent>
            </StyledProfileContentContainer>
            <StyledProfileContentContainer>
              <StyledProfileContentTitle>2021.11</StyledProfileContentTitle>
              <StyledProfileContent>
                조선·해양 설계 연구회장상 (대한조선학회)
              </StyledProfileContent>
            </StyledProfileContentContainer>
          </StyledProfileContentBox>
        </StyledProfileInfoContainer>
      </StyledProfileContainer>
    </StyledProfileComponent>
  );
};

export default Profile;
