import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import Home from '../components/home';
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Benkio'} />
      <Home />
    </Wrapper>
  );
};

export default index;