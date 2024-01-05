const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Skilify Admin</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          onClick={() => {
            setSelectedTab("Dashboard");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Dashboard" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Dashboard
          </a>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("My Course");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "My Course" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            My Course
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Calendar");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Calendar" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#table"></use>
            </svg>
            Calendar
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Resource");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Resource" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#grid"></use>
            </svg>
            Resource
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Quiz");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Quiz" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            Quiz
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Message");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Message" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            Message
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("My Status");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "My Status" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            My Status
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Wallet");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Wallet" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            Wallet
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("My Account");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "My Account" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#people-circle"></use>
            </svg>
            My Account
          </a>
        </li>
      </ul>
      <hr />
      <p className="footer">© 2020 All Rights Reserved</p>
    </div>
  );
};

export default Sidebar;
