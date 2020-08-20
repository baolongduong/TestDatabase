import React from 'react';
import { Container, Grid} from '@material-ui/core';
import Editable from './Editable';


function DemoContent()
{
    return (
        <Container maxWidth="xl">
            <Grid container>
                <Grid item xs={12}>
                {Editable()}
                </Grid>
            </Grid>          
        </Container>

        
    );
}

export default React.memo(DemoContent);
