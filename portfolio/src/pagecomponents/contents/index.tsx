import React, { useState } from "react";
import {
  StyledContentsComponent,
  StyledMenuContainer,
  StyledMenuButton,
} from "./contents.styled";
import Project from "./components/project";
import Skill from "./components/skill";

const Contents = () => {
  const [state, setState] = useState("project");
  return (
    <StyledContentsComponent>
      <StyledMenuContainer>
        <StyledMenuButton
          onClick={() => setState("project")}
          state={state}
          name="project"
        >
          Project
        </StyledMenuButton>
        <StyledMenuButton
          onClick={() => setState("skill")}
          state={state}
          name="skill"
        >
          Skill
        </StyledMenuButton>
      </StyledMenuContainer>
      {state === "project" && <Project></Project>}
      {state === "skill" && <Skill></Skill>}
    </StyledContentsComponent>
  );
};

export default Contents;
