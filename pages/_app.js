import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <Layout home={isHome}>
      <Component {...pageProps} pathname={router.pathname} />
    </Layout>
  );
}
