import React, {FunctionComponent} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {PrimaryButton} from '../Button/Button';

interface SearchInputProps {
    id: string,
    searchQuery?: string,
    placeholder: string,
    additionalStyle?: {
        width: string
    },
    onChange(e: any): void;
    handleSearchButtonClick(e: any): void
}

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: 'flex',
        },
        header: {
            fontSize: '18px',
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            padding: '17px 0'
        },
        searchContainer: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
            fontSize: '16px',
            marginRight: '20px',
            background: '#232323',
        },
        searchInput: {
            width: '100%',
            marginRight: '20px',
            marginLeft: '5px',
            border: 'none',
            background: '#232323',
            outline: 'none',
            padding: '17px 3px',
            color: '#8a8a8a'
        }
    }),
);

const SearchInput: FunctionComponent<SearchInputProps> = (props) => {
    const classes = useStyles();
    const {id, onChange, handleSearchButtonClick, searchQuery, placeholder, additionalStyle} = props;

    return <div className={classes.container} style={{...additionalStyle}}>
        <div className={classes.searchContainer}>
            <input className={classes.searchInput} id={id} onChange={onChange} value={searchQuery} placeholder={placeholder}/>
        </div>
        <PrimaryButton onClick={(handleSearchButtonClick)}>SEARCH</PrimaryButton>
    </div>;
};

export default SearchInput;