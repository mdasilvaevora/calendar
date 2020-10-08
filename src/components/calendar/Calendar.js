import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Day from '../day/Day';

const useStyles = makeStyles(theme => ({
    header: {
        textAlign: 'center'
    }
}))
export default function CalendarMonth({month, weekDays}) {
    const classes = useStyles();
    return (
        <div style={{display:'flex', justifyContent: 'center', marginTop: '32px'}}>
            <Paper style={{padding: '20px'}}>
                <Typography className={classes.header}>{month.name}</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {weekDays.map((day,index) => (
                                    <TableCell key={index}>
                                        {day}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {month.weeks.map((week,index) => (
                                <TableRow key={index}>
                                    {week.days.map((day,index) => (
                                        <TableCell key={index}>
                                            <Day day={day}/>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
        </div>
    )
}
