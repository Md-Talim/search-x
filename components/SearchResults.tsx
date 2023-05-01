import { Data } from '@/pages/search';

interface Props {
  results: Data;
}
const SearchResults = ({ results }: Props) => {
  return (
    <main>
      {results.items.map((item) => (
        <h2>{item.title}</h2>
      ))}
    </main>
  );
};

export default SearchResults;
