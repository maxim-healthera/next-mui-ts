import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ListFRomDocs from '../src/components/ListFRomDocs';
import Text from '../src/components/Text';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Text />
      <ListFRomDocs />
    </div>
  );
};

export default Home;
