import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  const searchResults: Result[] | undefined = data?.query?.pages;

  return searchResults
    ? {
        title: displayTerm,
        description: `Search results for ${searchTerm}`,
      }
    : {
        title: `${displayTerm} Not Found`,
      };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  const searchResults: Result[] | undefined = data?.query?.pages;
  const content = (
    <main className="bg-slate-200 mx-auto max-w-xl py-1 min-h-screen">
      {searchResults ? (
        Object.values(searchResults).map((item) => (
          <Item key={item.pageid} result={item} />
        ))
      ) : (
        <h2>{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
