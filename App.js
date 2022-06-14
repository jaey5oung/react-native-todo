import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import Constants from "expo-constants"
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native"
import TodoItem from "./components/TodoItem"
import Row from "./components/Row"
import Padding from "./components/Padding"

export default function App() {
  const [list, setList] = useState(["할일 1", "할일 2"])
  return (
    <SafeAreaView style={styles.container}>
      <Padding padding={12}>
        {/* 출력 */}
        {list.map((item) => (
          <TodoItem key={item} label={item} />
        ))}
        {/* 입력 */}
        <Row>
          <TextInput style={styles.input} />
          <Button title="보내기" onPress={() => {}} />
        </Row>
      </Padding>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  input: {
    flex: 1,
    borderWidth: 1,
  },
})
