import { Data } from '@/pages/search';

interface Props {
  results: Data;
}
const SearchResults = ({ results }: Props) => {
  return (
    <main className='mx-auto max-w-3xl px-8'>
      <section>
        <p className='text-dark'>
          About {results.searchInformation.formattedTotalResults} results (
          {results.searchInformation.formattedSearchTime}) seconds
        </p>
      </section>
      <section className='mt-10 flex flex-col gap-6'>
        {results.items.map((item) => (
          <article
            key={`${item.title}${item.displayLink}`}
            className='flex flex-col gap-1'
          >
            <p className='text-light'>{item.displayLink}</p>
            <h2>
              <a href={item.link} className='text-xl text-link-dark dark:text-link hover:underline'>
                {item.title}
              </a>
            </h2>
            <p className='text-lg text-dark dark:text-light'>{item.snippet}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default SearchResults;
