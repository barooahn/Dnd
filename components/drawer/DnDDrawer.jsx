import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TemplateThumbs from '../../components/templates/TemplateThumbs'
import ThumbsImages from '../../components/thumbs/ThumbsImages'
import BackgroundThumbs from '../../components/backgroundThumbs/backgroundThumbs'

import PageContent from '../pageContent/PageContent'

const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function DnDDrawer({
  setSelectedThumb,
  setPlaceholderNumber,
  setSelectedTemplate,
  selectedTemplate,
  setSelectedBackground,
  activeStep,
  selectedBackground,
  placeholder1,
  placeholder2,
  placeholder3,
  handleImageClick,
  title,
  type,
}) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  console.log('selectedTemplate - drawer', selectedTemplate)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  console.log('activeStep', activeStep)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {activeStep === 1 && <TemplateThumbs setSelectedTemplate={setSelectedTemplate} />}
        {activeStep === 2 && <BackgroundThumbs setSelectedBackground={setSelectedBackground} />}
        {activeStep === 3 && <ThumbsImages setSelectedThumb={setSelectedThumb} setPlaceholderNumber={setPlaceholderNumber} />}
      </Drawer>
      <Main open={open}>
        <PageContent
          selectedTemplate={selectedTemplate}
          selectedBackground={selectedBackground}
          setPlaceholderNumber={setPlaceholderNumber}
          placeholder1={placeholder1}
          placeholder2={placeholder2}
          placeholder3={placeholder3}
          handleImageClick={handleImageClick}
          title={title}
          type={type}
        />
      </Main>
    </Box>
  )
}
