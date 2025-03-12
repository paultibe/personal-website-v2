const Footer = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center">
        made with ❤️ and 🤹 ! |{" "}
        <a
          href="https://linkedin.com/in/paultibe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/paultibe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600"
        >
          Github
        </a>{" "}
        |{" "}
        <a
          href="https://instagram.com/paul_tibe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600"
        >
          Insta
        </a>{" "}
        |{" "}
        <a
          href="https://www.youtube.com/@PaulTiberghien"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600"
        >
          YouTube
        </a>
      </div>
    </div>
  );
};

export default Footer;
