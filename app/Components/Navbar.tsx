import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* for toggle button on smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            > */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/Experience">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/Projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/Videography">
                Videography
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/Interests">
                Interests
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/Blog">
                Blog
              </Link>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;

{
  /* <Link href="/Experience">Experience</Link>
      <br></br>
      <Link href="/Projects">Projects</Link>
      <br></br>
      <Link href="/Videography">Videography</Link>
      <br></br>
      <Link href="/Interests">Interests</Link>
      <br></br>
      <Link href="/Blog">Blog</Link> */
}
