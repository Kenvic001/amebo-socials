import { Typography, useTheme } from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import WidgetWrapper from '../../components/WidgetWrapper';

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant='h5' fontWeight='500'>
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width='100%'
        height='auto'
        alt='advert'
        src='https://amebosocials-api.onrender.com/assets/ad.jpg'
        style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
      />
      <FlexBetween>
        <Typography color={main}>Coca-Cola</Typography>
        <Typography color={medium}>cocacola.com</Typography>
      </FlexBetween>
      <Typography color={medium} m='0.5rem 0'>
        Your Everyday refreshing carbonated drink. Comes in different sizes for
        individuals and for the family. Best served chilled
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
