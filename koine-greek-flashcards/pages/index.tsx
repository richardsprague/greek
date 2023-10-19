import Head from 'next/head';
import FlashcardContainer from '../components/FlashcardContainer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Koine Greek Flashcards</title>
      </Head>
      <FlashcardContainer />
    </div>
  );
}
