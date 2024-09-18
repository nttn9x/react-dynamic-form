import { useGsapContext } from "@thor/contexts/gasp.context";
import LayoutHeader from "./layout-header.component";

const styles = {
  root: "h-screen w-full pt-[68px]",
};

function Layout({ children }: { children: React.ReactNode }) {
  const { root } = useGsapContext();
  return (
    <main ref={root} className={styles.root}>
      <LayoutHeader />
      {children}
    </main>
  );
}

export default Layout;
