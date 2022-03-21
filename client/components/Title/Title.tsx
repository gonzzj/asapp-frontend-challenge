import Typography from "@mui/material/Typography";

interface PageTitleProps {
  title: string
}

const Title: React.FC<PageTitleProps> = ({ title }) => (
  <Typography variant={'h2'} component={'h1'}>
    {title}
  </Typography>
);

export default Title;