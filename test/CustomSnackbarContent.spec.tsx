import * as React from 'react';
import createShallow from '@material-ui/core/test-utils/createShallow';
import { GlobalSnackbar } from '../src/GlobalSnackbar';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

describe('CustomSnackBarContent', () => {
    let wrapper;
    let shallow;

    beforeEach(() => {
        const messageTest = { messageText: 'test message', messageType: 'Info' };
        jest.resetModules();
        shallow = createShallow();
        wrapper = shallow(<GlobalSnackbar message={messageTest} seconds={0} mobile={false} />);
    });

    test('Should contain a <Snackbar />', () => {
        expect(wrapper.find(Snackbar)).toHaveLength(1);
    });

    test('Should contain a <SnackbarContent />', () => {
        expect(wrapper.find(SnackbarContent)).toHaveLength(1);
    });
});