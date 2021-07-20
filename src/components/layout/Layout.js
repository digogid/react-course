import style from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={style.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
