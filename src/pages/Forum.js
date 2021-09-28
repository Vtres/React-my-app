import * as React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../assets/css/forum.css'

const message = `Essa é uma descricao/texto postado no forum, um pre-view eh mostrado ao usuário `;

const lookPost = () => {
    console.log('cliquei')
}

export default function AutoGridNoWrap() {
    return (
        <Box className='box'>
            <Paper className='paper' onClick={lookPost}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Typography noWrap><p>React</p></Typography>
                    </Grid>

                    <Divider orientation="vertical" flexItem className="divider" />

                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>{message}</Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem className="divider" />
                    <Grid item>
                        <Typography noWrap><p>26/09/2021</p></Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className='paper' onClick={lookPost}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Typography noWrap><p>Erro ao compilar o CSS</p></Typography>
                    </Grid>

                    <Divider orientation="vertical" flexItem className="divider" />

                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>{message}</Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem className="divider" />
                    <Grid item>
                        <Typography noWrap><p>26/09/2021</p></Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}
