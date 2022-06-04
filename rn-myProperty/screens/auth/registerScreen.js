import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TextInput,
    TouchableOpacity,
    BackHandler,
} from "react-native";
import { withNavigation } from "react-navigation";
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Sizes, Fonts } from "../../constant/styles";
import { MaterialIcons } from '@expo/vector-icons';

class RegisterScreen extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton = () => {
        this.props.navigation.navigate('Login');
        return true;
    };

    state = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
                <ImageBackground
                    style={{ flex: 1 }}
                    source={require('../../assets/images/bg.jpg')}
                    resizeMode="cover"
                >
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={['black', 'rgba(0,0.10,0,0.77)', 'rgba(0,0,0,0.1)',]}
                        style={{ flex: 1, paddingHorizontal: Sizes.fixPadding * 2.0 }}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            {this.backArrow()}
                            {this.registerInfo()}
                            {this.userNameTextField()}
                            {this.emailTextField()}
                            {this.passwordTextField()}
                            {this.confirmPasswordTextField()}
                            {this.continueButton()}
                        </ScrollView>
                    </LinearGradient>
                </ImageBackground>
            </SafeAreaView >
        )
    }

    continueButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    this.props.navigation.navigate('BottomBar');
                }}
            >
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={['rgba(255, 118, 117, 0.8)', 'rgba(255, 118, 117, 0.6)', 'rgba(255, 118, 117, 0.4)',]}
                    style={styles.continueButtonStyle}
                >
                    <Text style={{ ...Fonts.whiteColor18Medium }}>
                        Continue
                    </Text>
                </LinearGradient>
            </TouchableOpacity >
        )
    }

    confirmPasswordTextField() {
        return (
            <TextInput
                style={{ ...Fonts.whiteColor14Medium, ...styles.textFieldContentStyle }}
                value={this.state.confirmPassword}
                secureTextEntry={true}
                onChangeText={(text) => this.setState({ confirmPassword: text })}
                placeholder="Confirm Password"
                placeholderTextColor="white"
            />
        )
    }

    passwordTextField() {
        return (
            <TextInput
                style={{ ...Fonts.whiteColor14Medium, ...styles.textFieldContentStyle }}
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={(text) => this.setState({ password: text })}
                placeholder="Password"
                placeholderTextColor="white"
            />
        )
    }

    emailTextField() {
        return (
            <TextInput
                style={{ ...Fonts.whiteColor14Medium, ...styles.textFieldContentStyle }}
                value={this.state.email}
                onChangeText={(text) => this.setState({ email: text })}
                placeholder="Email"
                placeholderTextColor="white"
            />
        )
    }

    userNameTextField() {
        return (
            <TextInput
                style={{ ...Fonts.whiteColor14Medium, ...styles.textFieldContentStyle }}
                value={this.state.userName}
                onChangeText={(text) => this.setState({ userName: text })}
                placeholder="Username"
                placeholderTextColor="white"
            />
        )
    }

    backArrow() {
        return (
            <MaterialIcons
                name="arrow-back"
                size={24}
                color={Colors.whiteColor}
                style={{
                    marginTop: Sizes.fixPadding * 7.0,
                    marginBottom: Sizes.fixPadding
                }}
                onPress={() => this.props.navigation.navigate('Login')}
            />
        )
    }

    registerInfo() {
        return (
            <View style={{
                marginTop: Sizes.fixPadding * 3.0,
                marginBottom: Sizes.fixPadding * 4.0
            }}>
                <Text style={{ ...Fonts.whiteColor36SemiBold }}>
                    Register
                </Text>
                <Text style={{
                    ...Fonts.whiteColor14Regular,
                    marginTop: Sizes.fixPadding - 15.0
                }}>
                    Create account
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textFieldContentStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        backgroundColor: "rgba(128, 128, 128, 0.8)",
        borderRadius: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.5,
    },
    continueButtonStyle: {
        borderRadius: Sizes.fixPadding * 2.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixPadding + 10.0,
        height: 56.0,
        marginBottom: Sizes.fixPadding * 2.0,
    },
})

RegisterScreen.navigationOptions = () => {
    return {
        header: () => null
    }
}

export default withNavigation(RegisterScreen);