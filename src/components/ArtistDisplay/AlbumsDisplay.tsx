import React, {FC} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        albumBox: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '10px',
            '&:hover': {
                cursor: 'pointer',
                opacity: '50%'
            }
        },
        albumBoxTitle: {
            display: 'flex',
            justifyContent: 'center',
            padding: '8px 0',
            color: '#01ffff'
        },
        thumbnail: {
            display: 'flex',
            justifyContent: 'center'
        },
    }),
);
interface displayProps {
     id: string,
    thumbnailUrl: string,
    title: string,
    keyId: number,
    onClick(albumId: string): void
}

const AlbumsDisplay: FC<displayProps> = ({id, thumbnailUrl, title, keyId, onClick}) => {
    const classes = useStyles();

    return <div className={classes.albumBox} key={keyId} onClick={() => onClick(id)} id={'' + keyId}>
        <div className={classes.thumbnail}>
            <img alt={'thumbnail'} src={thumbnailUrl}/>
        </div>
        <div className={classes.albumBoxTitle}>
            <span>{title}</span>
        </div>
    </div>
};

export default AlbumsDisplay;