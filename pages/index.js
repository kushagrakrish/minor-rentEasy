import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import Banner from "../components/Banner";
import { authentication } from "../components/Firebase/Firebase";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import SignIn from "./SignIn";

export default function Home({ exploreData, cardsData }) {
  const [user, loading] = useAuthState(authentication);

  return (
    <div className=''>
      {!user ? (
        <SignIn />
      ) : (
        <>
          <Head>
            <title> RentEasy </title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <Header />
          <Banner />

          <main className='max-w-7xl mx-auto px-8 sm:px-16'>
            <section className='pt-6'>
              <h2 className='text-4xl font-semibold'>Explore Nearby</h2>

              {/* Pulling data from a server end points {Api end Points} This is basically a Static server side rendering because usually on homepage data doesnt change very much */}
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {exploreData?.map((item, id) => (
                  <SmallCard
                    key={item.img}
                    img={item.img}
                    location={item.location}
                    distance={item.distance}
                  />
                ))}
              </div>
            </section>
            <section>
              <h2 className='text-4xl font-semibold mt-6 mb-6'>
                Live Anywhere
              </h2>
              <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 '>
                {cardsData?.map(({ item, img, title }) => (
                  <MediumCard key={img} img={img} title={title} />
                ))}
              </div>
            </section>

            <LargeCard
              img='https://links.papareact.com/4cj'
              title='The Greatest Outdoors'
              description='Wishlist curated by RentEasy'
              buttonText='Get Inspired'
            />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData: [...exploreData],
      cardsData: [...cardsData],
    },
  };
}
