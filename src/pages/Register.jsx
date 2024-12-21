import { Alert, Box, Button, TextField, Typography } from "@mui/material";

export default function Register() {
    return (
        <Box>
            <Typography variant="h3">Register</Typography>

            <Alert severtity="warning" sx={{ mt: 2 }}>All fields required.</Alert>

            <form>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
                    <TextField placeholder="Name" fullWidth />
                    <TextField placeholder="Username" fullWidth />
                    <TextField placeholder="Bio" fullWidth />
                    <TextField placeholder="Password" type="password" fullWidth />
                    <Button type="submit" variant="contained">Register</Button>
                </Box>
            </form>
        </Box>
    )
}
