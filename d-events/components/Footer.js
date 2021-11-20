import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { Menu, Container, Button, Header, Grid, List } from 'semantic-ui-react';

export default function Footer() {
    return (
        <Menu inverted fixed='bottom'>
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
            <Grid celled='internally' textAlign='center'>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <List Link>
                            <List.Item> Home</List.Item>
                            <List.Item> Other</List.Item>
                            <List.Item> Another</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <List Link>
                            <List.Item> Home</List.Item>
                            <List.Item> Other</List.Item>
                            <List.Item> Another</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <List Link>
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
