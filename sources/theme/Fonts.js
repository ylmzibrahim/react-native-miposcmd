import sizes from '../theme/Sizes'
import AppLoading from 'expo-app-loading';
import 
{ 
    useFonts, 
    Inter_100Thin, 
    Inter_200ExtraLight, 
    Inter_300Light, 
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_800ExtraBold, 
    Inter_900Black 
} from '@expo-google-fonts/inter';

const fonts = {
    largeTitle: { fontFamily: "Inter_400Regular", fontSize: sizes.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Inter_900Black", fontSize: sizes.h1, lineHeight: 36 },
    h2: { fontFamily: "Inter_700Bold", fontSize: sizes.h2, lineHeight: 30 },
    h3: { fontFamily: "Inter_700Bold", fontSize: sizes.h3, lineHeight: 22 },
    h4: { fontFamily: "Inter_700Bold", fontSize: sizes.h4, lineHeight: 22 },
    body1: { fontFamily: "Inter_400Regular", fontSize: sizes.body1, lineHeight: 36 },
    body2: { fontFamily: "Inter_400Regular", fontSize: sizes.body2, lineHeight: 30 },
    body3: { fontFamily: "Inter_400Regular", fontSize: sizes.body3, lineHeight: 22 },
    body4: { fontFamily: "Inter_400Regular", fontSize: sizes.body4, lineHeight: 22 },
    body5: { fontFamily: "Inter_400Regular", fontSize: sizes.body5, lineHeight: 22 },
};

export default fonts;

