import Layout from "../components/layout";
import Chakra from "../components/chakra";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <Chakra>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter intial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default MyApp;
