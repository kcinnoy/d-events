import styles from '@/styles/Footer.module.css';
import { Menu, Container, Button, Header, Grid, List } from 'semantic-ui-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <Menu inverted fixed='bottom' >
            {/* <Container>
                <Menu.Menu vertical>
                    <Menu.Item>D-events</Menu.Item>
                    <Menu.Item></Menu.Item>
                    <Menu.Item> b</Menu.Item>
                </Menu.Menu>
                <Menu.Menu vertical>
                    <Menu.Item>sdsgfhfffg f gf dsd</Menu.Item>
                    <Menu.Item>sdsdsd</Menu.Item>
                    <Menu.Item>sdsdsd</Menu.Item>
                </Menu.Menu>
                <Menu.Menu vertical>
                    <Menu.Item>sdsdsd</Menu.Item>
                    <Menu.Item>sdsdsd</Menu.Item>
                    <Menu.Item>sdsdsd</Menu.Item>
                </Menu.Menu>
            </Container> */}
            <Grid celled='internally' textAlign='center' >
                <Grid.Row>
                    <Grid.Column width={5}  >
                        <List >
                            <List.Item> Home</List.Item>
                            <List.Item> Other</List.Item>
                            <List.Item> Another</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <List >
                            <List.Item> Copyright &copy; D-events 2021</List.Item>
                            <List.Item> 
                                <Link href='/about'>
                                    About This Project
                                </Link>
                            </List.Item>
                            <List.Item> Another</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <List >
                            <List.Item> Home</List.Item>
                            <List.Item> Other</List.Item>
                            <List.Item> Another</List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Menu>
    );
}
