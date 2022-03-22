import Typography from "@mui/material/Typography";

interface PageTitleProps {
  label: string
}

const Title: React.FC<PageTitleProps> = ({ label }) => (
  <Typography variant={'h2'} component={'h1'}>
    {label}
  </Typography>
);

export default Title;