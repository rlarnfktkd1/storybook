import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import Button from "./Button";

const stories = storiesOf("버튼", module);

stories.add("슈플 메인 버튼", () => {
  return (
    <>
      <span>큰버튼</span>
      <Button>로그인</Button>
    </>
  );
});
