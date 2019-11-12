import React from "react";

import { storiesOf } from "@storybook/react";

import Main from "./main";

storiesOf("Basics", module).add("소개", () => <Main />);
storiesOf("Basics", module).add("신규 스토리 작성 방법", () => {
  return (
    <div>
      <p>
        /src/components 하위에 신규 컴포넌트를 생성할 경우
        "컴포넌트명.stories.js" 파일을 생성하여 작성한다
      </p>
    </div>
  );
});

// storiesOf("Button", module)
//   .add("with text", () => (
//     <Button onClick={action("clicked")}>Hello Button</Button>
//   ))
//   .add("with some emoji", () => (
//     <Button onClick={action("clicked")}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
