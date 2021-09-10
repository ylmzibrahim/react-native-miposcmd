// import React, { Component } from 'react';
// import { ScrollView, Platform } from 'react-native'
// import { SettingsDividerShort, SettingsDividerLong, SettingsEditText, SettingsCategoryHeader, SettingsSwitch, SettingsPicker } from "react-native-settings-components";
// import sizes from '../theme/Sizes';

// export default class SettingsScreen extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "",
//       allowPushNotifications: false,
//       gender: ""
//     };
//   }

//   render() { 
//     return (
//       <ScrollView
//       style={{
//         flex: 1,
//         marginTop: sizes.padding5,
//         backgroundColor: Platform.OS === "ios" ? colors.iosSettingsBackground : colors.white
//       }}
//     >
//       <SettingsCategoryHeader
//         title={"My Account"}
//         textStyle={Platform.OS === "android" ? { color: colors.monza } : null}
//       />
//       <SettingsDividerLong android={false} />
//       <SettingsEditText
//         title="Username"
//         dialogDescription={"Enter your username."}
//         valuePlaceholder="..."
//         negativeButtonTitle={"Cancel"}
//         buttonRightTitle={"Save"}
//         onValueChange={value => {
//           console.log("username:", value);
//           this.setState({
//             username: value
//           });
//         }}
//         value={this.state.username}        
//       />
//       <SettingsDividerShort />
//       <SettingsPicker
//         title="Gender"
//         dialogDescription={"Choose your gender."}
//         options={[
//           { label: "...", value: "" },
//           { label: "male", value: "male" },
//           { label: "female", value: "female" },
//           { label: "other", value: "other" }
//         ]}
//         onValueChange={value => {
//           console.log("gender:", value);
//           this.setState({
//             gender: value
//           });
//         }}
//         value={this.state.gender}
//         styleModalButtonsText={{ color: colors.monza }}
//       />

//       <SettingsDividerLong android={false} />
//       <SettingsCategoryHeader
//         title={"My Account"}
//         textStyle={Platform.OS === "android" ? { color: colors.monza } : null}
//       />
//       <SettingsDividerLong android={false} />

//       <SettingsSwitch
//         title={"Allow Push Notifications"}
//         onValueChange={value => {
//           console.log("allow push notifications:", value);
//           this.setState({
//             allowPushNotifications: value
//           });
//         }}
//         value={this.state.allowPushNotifications}
//         trackColor={{
//           true: colors.switchEnabled,
//           false: colors.switchDisabled,
//         }}
//       />
      
//     </ScrollView>
//     )
    
//   }
// }

// const colors = {
//   white: "#FFFFFF",
//   monza: "#C70039",
//   switchEnabled: "#C70039",
//   switchDisabled: "#efeff3",
//   blueGem: "#27139A",
// };











import React from 'react';
import { View, Text, ScrollView, Alert, StatusBar } from 'react-native'
import { SectionRow, SettingsPage, NavigateRow, BaseRow, CheckRow, SwitchRow } from 'react-native-settings-view';
import sizes from '../theme/Sizes';
import Color from '../theme/Colors';
import { SettingsDividerShort, SettingsDividerLong, SettingsEditText, SettingsCategoryHeader, SettingsSwitch, SettingsPicker } from "react-native-settings-components";

const SettingsScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: sizes.padding5,
        marginBottom: 50,
        backgroundColor: Platform.OS === "ios" ? colors.iosSettingsBackground : colors.white
      }}
    >
      <StatusBar barStyle='dark-content' />
      {/* <SettingsCategoryHeader
        title={"Ayarlar"}
        //textStyle={Platform.OS === "android" ? { color: colors.monza } : null}
        
      /> */}
        <SettingsPage style={{ marginVertical: sizes.padding5*2 }}>
          <SectionRow>
            <NavigateRow
              text="Şartlar ve koşullar "
              leftIcon={{
                name: 'file-document',
                type: 'material-community',
                color: 'rgba(0,0,0,0.5)'
              }}
              onPress={() => Alert.alert("Şartlar ve Koşullar", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium earum quae officia aperiam nostrum illum blanditiis molestias? Est facilis eum blanditiis eaque cum aliquam deserunt tempora animi explicabo. Autem!")}
            />
            <NavigateRow
              text="Gizlilik Politikası"
              leftIcon={{
                name: 'folder-lock',
                type: 'material-community',
                color: 'rgba(0,0,0,0.5)'
              }}
              onPress={() => Alert.alert("Gizlilik Politikası", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim accusantium earum quae officia aperiam nostrum illum blanditiis molestias? Est facilis eum blanditiis eaque cum aliquam deserunt tempora animi explicabo. Autem!")}
            />
            <NavigateRow
              text="Bizimle iletişime geçin"
              leftIcon={{
                backgroundColor: 'red',
                name: 'users',
                type: 'font-awesome',
                color: 'rgba(0,0,0,0.5)'
              }}
              onPress={() => navigation.navigate('AboutUsScreen')}
            />
            <NavigateRow
              text="QR okut"
              leftIcon={{
                name: 'qrcode',
                type: 'font-awesome',
                color: 'rgba(0,0,0,0.5)'
              }}
              onPress={() => navigation.navigate('BarkodeScannerScreen')}
            />
            <SwitchRow
              text="Bildirimleri aç"
              checked
              leftIcon={{
                name: 'ios-notifications',
                type: 'ionicon',
                color: 'rgba(0,0,0,0.5)'
              }}
              onValueChange={(isChecked) => console.log('checked', isChecked)}
            />
            <SwitchRow
              text="Rahatsız etme"
              enabled
              leftIcon={{
                name: 'do-not-disturb',
                type: 'material-community',
                color: 'rgba(0,0,0,0.5)'
              }}
              onValueChange={(isEnabled) => console.log('checked', isEnabled)}
            />
            <BaseRow
              text="Versiyon"
              leftIcon={{
                name: 'tag',
                type: 'font-awesome',
                color: 'rgba(0,0,0,0.5)'
              }}
              rightContent={<Text>0.1.0</Text>}
            />
          </SectionRow>
        </SettingsPage>
    </ScrollView>
  );
}
 
export default SettingsScreen;

const colors = {
    white: "#FFFFFF",
    monza: "#C70039",
    switchEnabled: "#C70039",
    switchDisabled: "#efeff3",
    blueGem: "#27139A",
  };