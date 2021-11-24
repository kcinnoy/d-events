import { Button } from 'semantic-ui-react';
import Layout from '@/components/Layout';
import {API_URL} from '@/config/index';


export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json()

    return {
        props: {events},
        revalidate: 1
    }
}

export default function HomePage({events}) {

    return (
    <Layout>
      <h1>Home</h1>
    
    </Layout>
  )
}
