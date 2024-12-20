import { Outlet, Link } from "react-router-dom";
const clickHandle = () => {
  const current = window.location.href;
  location.href = `${current}blogs`;
}
const Layout = () => {
  return (<>
    <div className="container">

    </div>
      <Outlet />
    </>)
}

export default Layout;