import styled from '@emotion/styled';
import { Apple } from '@mui/icons-material';
import { AppBar, Badge, Box, Container, InputBase, Toolbar, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div") ({
    background: "white",
    padding: "0 10px",
    borderRadius: "10px",
    width: "40%"
})

const Icons = styled(Box) (({theme}) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <Container>
            <StyledToolbar>
                <Typography
                variant="h6" 
                component="p" 
                sx={{
                    display: {xs: "none", sm: "block"}
                }}
                >Rajesh Bhattarai</Typography>
                <Apple sx={{
                    display: {xs: "block", sm: "none"}
                }} />
                <Search>
                    <InputBase placeholder="Search..." sx={{width: "100%"}} />
                </Search>
                <Icons>
                    <Badge badgeContent={2} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                </Icons>
            </StyledToolbar> 
           </Container>
        </AppBar>
    );
};

export default Navbar;