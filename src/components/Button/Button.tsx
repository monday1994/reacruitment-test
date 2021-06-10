import React, {FunctionComponent} from 'react';
import {Button, withStyles} from '@material-ui/core';

interface ButtonProps {
    onClick(e: any): void,
    disabled?: boolean
}

const PrimaryStyledButton = withStyles({
    root: {
        width: '150px',
        background: '#01ffff',
        color: '#000',
        '&:hover': {
            opacity: '80%',
            background: '#01ffff'
        }
    },
    label: {
        color: '#000',
        textTransform: 'initial'
    }
})(Button);

export const PrimaryButton: FunctionComponent<ButtonProps> = ({onClick, disabled, children}) => {
    return <>
        <PrimaryStyledButton onClick={onClick} disabled={disabled} >{children}</PrimaryStyledButton>
    </>;
};
