import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Response from '@/data';
import SearchResults from '@/components/SearchResults';
import NavBar from '@/components/NavBar';
import SearchInput from '@/components/SearchInput';

export interface Data {
  searchInformation: {
    formattedSearchTime: string;
    formattedTotalResults: string;
  };
  items: {
    title: string;
    link: string;
    displayLink: string;
    snippet: string;
  }[];
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const baseURL = 'https://www.googleapis.com/customsearch/v1?';
  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const useDummyData = false;
  const startIndex = context.query.start || '0';

  const data: Data = useDummyData
    ? Response
    : await fetch(
        `${baseURL}key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
};

const Search = ({ results }: { results: Data }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <NavBar>
        <SearchInput />
      </NavBar>

      <SearchResults results={results} />
    </>
  );
};

export default Search;
