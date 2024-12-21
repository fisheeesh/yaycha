/* eslint-disable react/prop-types */
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

export default function UserList({ title }) {
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 3 }}>{title}</Typography>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar />
                    </ListItemAvatar>
                    <ListItemText primary="Alice @alice" secondary="Alices profile bio."></ListItemText>
                </ListItem>
            </List>
        </Box>
    )
}
