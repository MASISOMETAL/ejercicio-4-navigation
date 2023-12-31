import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import MainNavigation from './src/navigation/MainNavigation'

const App = () => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#ff0000" />
            <MainNavigation />
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

