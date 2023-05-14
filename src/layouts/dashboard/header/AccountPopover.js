/* eslint-disable no-lonely-if */
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
import { useAuth } from '../../../context/AuthContext';

const MENU_OPTIONS = [
    {
        label: 'Home',
        icon: 'eva:home-fill',
        linkTo: '/welcome'
    },
    {
        label: 'Meta Adminstration',
        icon: 'eva:people-fill',
        linkTo: '/admin'
    },
    {
        label: 'Administration',
        icon: 'eva:umbrella-outline',
        linkTo: '/admin/hut'
    },
    {
        label: 'Mon Profile',
        icon: 'eva:person-fill',
        linkTo: '/profile'
    },
    {
        label: 'Paramètres',
        icon: 'eva:settings-2-fill',
        linkTo: '/settings'
    }
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
    const [open, setOpen] = useState(null);
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleLogout = async () => {
        try {
            logout()
        } catch (error) {
            sessionStorage.removeItem("x-auth");
            console.error(error);
        }
    };

    const handleMenuItemClick = (event, option) => {
        handleClose();
        navigate(option.linkTo);
    };

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    return (
        <>
            <IconButton
                onClick={handleOpen}
                sx={{
                    p: 0,
                    ...(open && {
                        '&:before': {
                            zIndex: 1,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                        },
                    }),
                }}
            >
                <Avatar src={user?.photoURL} alt={user?.name} />
            </IconButton>

            <Popover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 0,
                        mt: 1.5,
                        ml: 0.75,
                        width: 200,
                        '& .MuiMenuItem-root': {
                            typography: 'body2',
                            borderRadius: 0.75,
                        },
                    },
                }}
            >
                <Box sx={{ my: 1.5, px: 2.5 }}>
                    <Typography variant="subtitle2" noWrap>
                        {user?.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        {user?.login}
                    </Typography>
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack sx={{ p: 1 }}>
                    {MENU_OPTIONS.map((option, index) => (
                        <MenuItem
                            key={option.label}
                            onClick={(event) => handleMenuItemClick(event, option)}
                        >
                            <Box
                                key={option.label + index}
                                component={Icon}
                                icon={option.icon}
                                sx={{
                                    mr: 1,
                                    width: 24,
                                    height: 24
                                }}
                            />
                            {option.label}
                        </MenuItem>
                    ))}
                    <MenuItem onClick={toggleFullScreen}>
                        <Box
                            component={Icon}
                            icon={"ooui:full-screen"}
                            sx={{
                                mr: 1,
                                width: 24,
                                height: 24
                            }}
                        />
                        Plein écran
                    </MenuItem>
                </Stack>
                <Divider sx={{ borderStyle: 'dashed' }} />
                <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
                    <Box
                        component={Icon}
                        icon={"eva:power-fill"}
                        sx={{
                            mr: 1,
                            width: 24,
                            height: 24
                        }}
                    />
                    Se déconnecter
                </MenuItem>
            </Popover>
        </>
    );
}
