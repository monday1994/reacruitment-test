import React from 'react';
import {createStyles, makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Album} from '../../screens/Search';

const StyledTableCell = withStyles(() =>
    createStyles({
        head: {
            backgroundColor: '#232323',
            color: '#fff',
        },
        body: {
            fontSize: 14,
            color: '#fff',
            borderColor: '#2a2a2a'
        },
    }),
)(TableCell);

const StyledTableHeaderCell = withStyles(() =>
    createStyles({
        head: {
            backgroundColor: '#1c1c1c',
            color: '#fff',
        },
        body: {
            fontSize: 14,
            color: '#fff',
            borderColor: '#2a2a2a'
        },
    }),
)(TableCell);


const StyledTableRow = withStyles(() =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                background: '#1c1c1c',
            },
        },
        body: {
            fontSize: 14,
            color: '#fff',
            borderColor: '#2a2a2a'
        },
    }),
)(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        background: '#232323',
    },
});



interface AlbumsTableProps {
    rows: Album[]
}

export default function AlbumsTable(props: AlbumsTableProps) {
    const classes = useStyles();

    const {rows} = props;

    const formatDuration = (duration: number) => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration - minutes * 60;

        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
    };

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="songs table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableHeaderCell>#</StyledTableHeaderCell>
                        <StyledTableHeaderCell align="center">Title</StyledTableHeaderCell>
                        <StyledTableHeaderCell align="center">Artist</StyledTableHeaderCell>
                        <StyledTableHeaderCell align="center">Time</StyledTableHeaderCell>
                        <StyledTableHeaderCell align="center">Released</StyledTableHeaderCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i: number) => (
                        <TableRow key={row.id}>
                            <StyledTableCell>
                                {i+1}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.title}</StyledTableCell>
                            <StyledTableCell align="center">{row.artist.name}</StyledTableCell>
                            <StyledTableCell align="center">{formatDuration(row.duration)}</StyledTableCell>
                            <StyledTableCell align="center">{2011}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

