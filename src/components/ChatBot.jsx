import { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/5c7379a9a726ff2eea593f00/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode.insertBefore(s1, s0);

    return () => {
      s1.remove(); // cleanup when component unmounts
    };
  }, []);

  return null; // widget loads automatically
};

export default ChatBot;
