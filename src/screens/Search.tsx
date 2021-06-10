import React, {FunctionComponent, useEffect, useState} from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {fetchTrackList, search} from '../redux/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import SearchInput from '../components/SearchInput/SearchInput';
import {SEARCH_TIMEOUT} from '../constants/configuration';
import {AppState} from '../redux/reducers/indexReducer';
import AlbumsDisplay from '../components/ArtistDisplay/AlbumsDisplay';
import AlbumsTable from '../components/AlbumsTable/AlbumsTable';

export interface Artist {
    id: string,
    name: string,
    picture: string,
}

export interface Album {
    id: string,
    title: string,
    duration: number,
    artist: Artist
}

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            background: '#1c1c1c',
            padding: '50px',
            height: '100vh'
        },
        search: {
            width: '80%'
        },
        results: {

        },
        searchHeader: {
            padding: '25px 0 10px 0',
            '& span': {
                fontSize: '25px',
                color: '#fff'
            }
        },
        horizontalLine: {
            width: '80%',
            borderBottom: '2px solid #232323'
        },
        albums: {
            padding: '20px 0',
            width: '80%',
            overflowX: 'scroll'
        },
        albumHeader: {
            fontSize: '25px',
            '& span': {
                color: '#01ffff'
            }
        },
        albumsList: {
            display: 'flex',
            marginTop: '10px',
            '& div:first-child': {
                paddingLeft: 0,
            }
        },
        albumsDetailsList: {
            display: 'flex',
            width: '80%',
        },
        left: {
            flex: 1,
            paddingRight: '20px',
        },
        right: {
            flex: 8,
        },
        rightHeader: {
            color: '#01ffff',
            fontSize: '25px'
        },
        imageBox: {

        },
        header: {

        },
        list: {
            paddingTop: '20px',
            height: '30vh',
            color: '#fff',
            overflowY: 'scroll'
        }
    }),
);


const Search: FunctionComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const {tracksList, albums: {data}} = useSelector((state: any) => state);

    useEffect(() => {
        dispatch(search(false, ''));
    }, []);

    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        setTimeout(() => {
            dispatch(search(false, searchQuery));
        }, SEARCH_TIMEOUT);
    }, [searchQuery]);

    const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

    useEffect(() => {
        if(selectedAlbum) {
            dispatch(fetchTrackList(selectedAlbum.id));
        }
    }, [selectedAlbum]);

    const onSearchButtonClick = () => {
        dispatch(search(false, searchQuery));
    };

    const handleAlbumClick = (albumId: string) => {
        const found = data.find((element: any) => {
            const {album: {id}} = element;
            return id === albumId
        });

        setSelectedAlbum(found.album || null);
    };

    const renderAlbumsList = () => {
        if(data && data.length) {
            return data.map(((element: any, i: number) => {
                const {album: {
                    id,
                    title,
                    cover
                }} = element;

                return <AlbumsDisplay
                    id={id}
                    keyId={i}
                    thumbnailUrl={cover}
                    title={title}
                    onClick={handleAlbumClick}
                />
            }));
        }

        return <div style={{color: '#01ffff', fontSize: '30px', padding: '20px 0'}}>NO RESULTS</div>
    };

    const renderSongsList = () => {
        if(selectedAlbum && tracksList.length) {
            const {title, cover} = selectedAlbum;

            return <div className={classes.albumsDetailsList}>
                <div className={classes.left}>
                    <div className={classes.imageBox}>
                        <img alt={'thumbnail'} src={cover}/>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.header}>
                        <span className={classes.rightHeader}>{title}</span>
                    </div>
                    <div className={classes.list}>
                        <AlbumsTable rows={tracksList} />
                    </div>
                </div>
            </div>
        }
    };

    return <section className={classes.container}>
            <div className={classes.search}>
                <SearchInput
                    id={'search-input'}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    handleSearchButtonClick={onSearchButtonClick}
                    searchQuery={searchQuery}
                    placeholder={'Search here...'}
                />
            </div>
            <div className={classes.results}>
                <div className={classes.searchHeader}>
                    <span>Search Results {searchQuery ? ` for "${searchQuery}"` : ''}</span>
                </div>
                <div className={classes.horizontalLine}></div>
                <div className={classes.albums}>
                    <div className={classes.albumHeader}>
                        <span>ALBUMS</span>
                    </div>
                    <div className={classes.albumsList}>
                        {renderAlbumsList()}
                    </div>
                </div>
                {renderSongsList()}
            </div>
    </section>
};

export default Search;