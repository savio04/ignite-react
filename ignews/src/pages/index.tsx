import { GetServerSideProps } from "next";
import Head from "next/head";
import { SubcribeButton } from "../components/SubcribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Ignews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>
            News about <br />
            the <span>React</span> World.
          </h1>
          <p>
            Get acess to all publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubcribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1JNf4zDuBzjICJ5m1Li5xmfJ");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 48, //48 horas
  };
};
