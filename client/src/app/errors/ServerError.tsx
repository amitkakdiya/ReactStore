import { Container, Divider, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'

function ServerError() {
    const { state } = useLocation();

    return (
        <Container>

            {state?.error ? (
                <>
                    <Typography gutterBottom variant='h3' color='secondary'>{state.error.title}</Typography>
                    <Divider />
                    <Typography variant='body1'>{state.error.detail || 'Inernal Server error'}</Typography>
                </>
            ) : (
                <Typography variant='h5'>Server error</Typography>
            )}
        </Container>
    )
}

export default ServerError