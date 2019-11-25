const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: '1px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.grey[100],
  },
  card: {
    minWidth: 300,
    marginTop: '6em',
  },
  avatar: {
    margin: '1em',
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: theme.palette.secondary[500],
  },
  form: {
    padding: '0 1em 1em 1em',
    maxWidth: theme.spacing.unit * 33.5,
  },
  input: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  button: {
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    width: '100%',
  },
});

export default styles;
