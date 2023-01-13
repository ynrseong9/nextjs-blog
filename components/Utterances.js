import { memo } from "react";

function Utterances() {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }

        const scriptElement = document.createElement("script");
        scriptElement.src = "https://utteranc.es/client.js";
        scriptElement.async = true;
        scriptElement.setAttribute("repo", "ynrseong9/nextjs-blog");
        scriptElement.setAttribute("issue-term", "pathname");
        scriptElement.setAttribute("theme", "github-dark-orange");
        scriptElement.setAttribute("crossorigin", "anonymous");
        elem.appendChild(scriptElement);
      }}
    />
  );
}

export default memo(Utterances);
