import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';
import Color from '../theme/Colors';
import sizes from '../theme/Sizes';

export default StyleSheet.create({
    
    containerMain: {
        flex: 1,
        backgroundColor: Color.appBackgroundColor
    },
    containerSplashScreen: {
        flex: 1, 
        backgroundColor: Color.miposColor
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerSignIn: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerKaydol: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    headerText: {
        fontSize: 50,
        color: Color.white,
        fontFamily: 'Inter-Black'
    },
    footer: {
        flex: 1,
        backgroundColor: Color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 35,
        paddingHorizontal: 30,
        paddingBottom: -15
    },
    footerSignIn: {
        flex: 1,
        backgroundColor: Color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 250,
        paddingVertical: 35,
        paddingHorizontal: 30
    },
    footerKaydol: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 35,
    },
    logoWhite: {
        tintColor: Color.white
    },
    title: {
        color: Color.black,
        fontSize: 25,
        fontFamily: 'Inter_900Black',
        textAlign: 'center',
        marginHorizontal: 10
    },
    text: {
        color: Color.black,
        marginTop:5,
        textAlign: 'center',
        fontFamily: 'Inter_400Regular'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    textBasla: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    },
    textSign: {
        color: Color.appBackgroundColor,
        fontFamily: 'Inter_900Black'
    },
    text_header: {
        color: Color.white,
        fontFamily: 'Inter_900Black',
        fontSize: 30
    },
    text_headerKaydol: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: Color.black,
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    buttonGirisYap: {
        alignItems: 'center',
        marginTop: 50
    },
    touchableGirisYap: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textGirisYap: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    shadow: {
        shadowColor: Color.secondary,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    card: {
        marginTop: sizes.padding2,
        marginHorizontal: sizes.padding5, 
        alignItems: 'center', 
        borderRadius: sizes.radius, 
        backgroundColor: Color.white,
        //...styles.shadow 
        shadowColor: Color.secondary,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    card_header: {
        flexDirection: 'row',
        marginTop: sizes.padding,
        paddingHorizontal: sizes.padding5
    },
    card_options: {
        width: '100%',
        paddingHorizontal: sizes.padding,
        paddingBottom: sizes.padding,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});