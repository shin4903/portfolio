import React from "react";
import {
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
} from "./project.styled";
import Skill from "../skill";
import { Link } from "react-router-dom";

const Project = () => {
  const skills = ["react", "zustand", "styledcomponents", "typescript"];
  const github = "https://github.com/shin4903/NextLevel";
  return (
    <StyledProjectComponent>
      <StyledProjectContainer>
        <StyledProjectCard>
          <StyledProjectCardImage src="project/nextlevel.gif"></StyledProjectCardImage>
          <StyledProjectTitle>NextLevel</StyledProjectTitle>
          <StyledProjectPeriod>23.10.09 ~ 23.11.17 | 6인</StyledProjectPeriod>
          <StyledProjectInfomation>
            다양한 K-콘텐츠와 시나리오를 통해 실전 한국어 표현을 학습할 수 있는
            체험형 프로젝트입니다.
          </StyledProjectInfomation>
          <StyledProjectSkillContainer>
            {skills.map((Skill: any) => {
              return (
                <StyledProjectSkillImage
                  src={`skill/${Skill}.png`}
                ></StyledProjectSkillImage>
              );
            })}
          </StyledProjectSkillContainer>
          <StyledBottomContainer>
            <StyledProjectGitContainer>
              <Link to={github}>
                <StyledProjectGitBox>
                  <StyledGitHubimg src="github.png"></StyledGitHubimg>
                  <StyledGitHubFont>Github</StyledGitHubFont>
                </StyledProjectGitBox>
              </Link>
            </StyledProjectGitContainer>
            <StyledProjectDetailContainer>
              <StyledProjectDetailImg src="detail.png"></StyledProjectDetailImg>
              <StyledDetailFont>상세보기</StyledDetailFont>
            </StyledProjectDetailContainer>
          </StyledBottomContainer>
        </StyledProjectCard>
        <StyledProjectCard>
          <StyledProjectCardImage src="project/nextlevel.gif"></StyledProjectCardImage>
          <StyledProjectTitle>NextLevel</StyledProjectTitle>
          <StyledProjectPeriod>23.10.09 ~ 23.11.17 | 6인</StyledProjectPeriod>
          <StyledProjectInfomation>
            다양한 K-콘텐츠와 시나리오를 통해 실전 한국어 표현을 학습할 수 있는
            체험형 프로젝트입니다.
          </StyledProjectInfomation>
          <StyledProjectSkillContainer>
            {skills.map((Skill: any) => {
              return (
                <StyledProjectSkillImage
                  src={`skill/${Skill}.png`}
                ></StyledProjectSkillImage>
              );
            })}
          </StyledProjectSkillContainer>
          <StyledBottomContainer>
            <StyledProjectGitContainer>
              <Link to={github}>
                <StyledProjectGitBox>
                  <StyledGitHubimg src="github.png"></StyledGitHubimg>
                  <StyledGitHubFont>Github</StyledGitHubFont>
                </StyledProjectGitBox>
              </Link>
            </StyledProjectGitContainer>
            <StyledProjectDetailContainer>
              <StyledProjectDetailImg src="detail.png"></StyledProjectDetailImg>
              <StyledDetailFont>상세보기</StyledDetailFont>
            </StyledProjectDetailContainer>
          </StyledBottomContainer>
        </StyledProjectCard>
        <StyledProjectCard>
          <StyledProjectCardImage src="project/nextlevel.gif"></StyledProjectCardImage>
          <StyledProjectTitle>NextLevel</StyledProjectTitle>
          <StyledProjectPeriod>23.10.09 ~ 23.11.17 | 6인</StyledProjectPeriod>
          <StyledProjectInfomation>
            다양한 K-콘텐츠와 시나리오를 통해 실전 한국어 표현을 학습할 수 있는
            체험형 프로젝트입니다.
          </StyledProjectInfomation>
          <StyledProjectSkillContainer>
            {skills.map((Skill: any) => {
              return (
                <StyledProjectSkillImage
                  src={`skill/${Skill}.png`}
                ></StyledProjectSkillImage>
              );
            })}
          </StyledProjectSkillContainer>
          <StyledBottomContainer>
            <StyledProjectGitContainer>
              <Link to={github}>
                <StyledProjectGitBox>
                  <StyledGitHubimg src="github.png"></StyledGitHubimg>
                  <StyledGitHubFont>Github</StyledGitHubFont>
                </StyledProjectGitBox>
              </Link>
            </StyledProjectGitContainer>
            <StyledProjectDetailContainer>
              <StyledProjectDetailImg src="detail.png"></StyledProjectDetailImg>
              <StyledDetailFont>상세보기</StyledDetailFont>
            </StyledProjectDetailContainer>
          </StyledBottomContainer>
        </StyledProjectCard>
        <StyledProjectCard>
          <StyledProjectCardImage src="project/nextlevel.gif"></StyledProjectCardImage>
          <StyledProjectTitle>NextLevel</StyledProjectTitle>
          <StyledProjectPeriod>23.10.09 ~ 23.11.17 | 6인</StyledProjectPeriod>
          <StyledProjectInfomation>
            다양한 K-콘텐츠와 시나리오를 통해 실전 한국어 표현을 학습할 수 있는
            체험형 프로젝트입니다.
          </StyledProjectInfomation>
          <StyledProjectSkillContainer>
            {skills.map((Skill: any) => {
              return (
                <StyledProjectSkillImage
                  src={`skill/${Skill}.png`}
                ></StyledProjectSkillImage>
              );
            })}
          </StyledProjectSkillContainer>
          <StyledBottomContainer>
            <StyledProjectGitContainer>
              <Link to={github}>
                <StyledProjectGitBox>
                  <StyledGitHubimg src="github.png"></StyledGitHubimg>
                  <StyledGitHubFont>Github</StyledGitHubFont>
                </StyledProjectGitBox>
              </Link>
            </StyledProjectGitContainer>
            <StyledProjectDetailContainer>
              <StyledProjectDetailImg src="detail.png"></StyledProjectDetailImg>
              <StyledDetailFont>상세보기</StyledDetailFont>
            </StyledProjectDetailContainer>
          </StyledBottomContainer>
        </StyledProjectCard>
      </StyledProjectContainer>
    </StyledProjectComponent>
  );
};

export default Project;
