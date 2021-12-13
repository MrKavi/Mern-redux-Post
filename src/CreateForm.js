import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { Container,  Grid } from '@material-ui/core';

import useStyles from './styles';
import Form from './components/Form/Form';
function CreateForm() {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

    return (
<Container>
          <Grid className={classes.Grid}
        container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid >
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid> 
          </Grid>
  </Container>
      
    )
}

export default CreateForm
