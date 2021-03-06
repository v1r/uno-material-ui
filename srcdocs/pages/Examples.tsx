import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';
import * as React from 'react';
import {SnackbarContainer} from '../../src';
import ButtonWithLoading from '../components/ButtonWithLoading';
import Component from '../components/Component';
import ConfirmationDialog from '../components/ConfirmationDialog';
import ErrorBoundary from '../components/ErrorBoundary';
import FixedLinearProgress from '../components/FixedLinearProgress';
import FormModal from '../components/FormModal';
import FormSwitch from '../components/FormSwitch';
import IndeterminatedLoading from '../components/IndeterminatedLoading';
import LoadingIcon from '../components/LoadingIcon';
import MenuList from '../components/MenuList';
import NavBar from '../components/NavBar';
import SnackbarContainerDemo from '../components/SnackbarContainer';
import TextValidator from '../components/TextValidator';
import ThumbnailPhoto from '../components/ThumbnailPhoto';
import Title from '../components/Title';
import Apis from '../utils/componentsApi';
import Codes from '../utils/componentsCode';

const useStyles = makeStyles({
    container: {
        margin: '0',
        padding: 30,
        width: '100%',
    },
    content: {
        marginTop: 10,
    },
    logo: {
        width: '300px',
    },
    paper: {
        paddingLeft: 30,
        paddingRight: 30,
        width: '100%',
    },
});

export default () => {
    const classes = useStyles({});

    return (
        <>
        <SnackbarContainer />
        <Grid container={true} className={classes.container}>
            <Paper className={classes.paper}>
                <Component
                    title='ButtonWithLoading'
                    text='A button that turns into an animated loading icon when the action is resolving.'
                    api={Apis.ButtonWithLoading}
                    code={Codes.ButtonWithLoading}
                >
                    <ButtonWithLoading />
                </Component>
                <Component
                    title='ConfirmationDialog'
                    text='A customizable dialog to confirm important actions like delete an item.'
                    api={Apis.ConfirmationDialog}
                    code={Codes.ConfirmationDialog}
                >
                    <ConfirmationDialog />
                </Component>
                <Component
                    title='ErrorBoundary'
                    text='This container catch an error in the children, displaying it.'
                    code={Codes.ErrorBoundary}
                >
                    <ErrorBoundary />
                </Component>
                <Component
                    title='FixedLinearProgress'
                    text='A linear progress component.'
                    api={Apis.FixedLinearProgress}
                    code={Codes.FixedLinearProgress}
                >
                    <FixedLinearProgress />
                </Component>
                <Component
                    title='FormModal'
                    text='A wrapper for your modals with a form logic, just add input fields.'
                    api={Apis.FormModal}
                    code={Codes.FormModal}
                >
                    <FormModal />
                </Component>
                <Component
                    title='FormSwitch'
                    text='An useful switch component with label, perfect for forms.'
                    api={Apis.FormSwitch}
                    code={Codes.FormSwitch}
                >
                    <FormSwitch />
                </Component>
                <Component
                    title='SnackbarContainer'
                    text='A global snackbar component implemented using Observer pattern, reducing the load on re-renders. It has to be immediately after your ThemeProvider tag
                     because the snackbar type colors are based on the theme. Just add the container and consume the service at any children on your app.'
                    code={Codes.SnackbarContainer}
                >
                    <SnackbarContainerDemo />
                </Component>
                <Component
                    title='IndeterminatedLoading'
                    text='A screen-wide modal that blocks the entire UI to prevent interruption during loading or fetching.'
                    api={Apis.IndeterminatedLoading}
                    code={Codes.IndeterminatedLoading}
                >
                    <IndeterminatedLoading />
                </Component>
                <Component
                    title='LoadingIcon'
                    text='A center-aligned circular loading animation.'
                    api={Apis.LoadingIcon}
                    code={Codes.LoadingIcon}
                >
                    <LoadingIcon />
                </Component>
                <Component
                    title='MenuList'
                    text='A left-side permanent drawer to display navigation options,
                        it leaves an space to add a Navbar.'
                    code={Codes.MenuList}
                >
                    <MenuList />
                </Component>
                <Component
                    title='NavBar'
                    text='A navbar. Uses primary color of your theme. You can add a title or logo, and buttons.'
                    code={Codes.NavBar}
                >
                    <NavBar />
                </Component>
                <Component
                    title='TextValidator'
                    text='An input with validations.'
                    api={Apis.TextValidator}
                    code={Codes.TextValidator}
                >
                    <TextValidator />
                </Component>
                <Component
                    title='ThumbnailPhoto'
                    text='An small avatar to display a photo with tooltip.'
                    api={Apis.ThumbnailPhoto}
                    code={Codes.ThumbnailPhoto}
                >
                    <ThumbnailPhoto />
                </Component>
                <Component
                    title='Title'
                    text='A title, it also changes the document title,
                        so it is displayed on the tab of your web browser.'
                    api={Apis.Title}
                    code={Codes.Title}
                >
                    <Title />
                </Component>
            </Paper>
        </Grid>
        </>
    );
};
