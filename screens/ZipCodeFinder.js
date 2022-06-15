import React, { useState } from "react"
import { FlatList, TextInput, Button, Text } from "react-native"

import Padding from "../components/Padding"
import Row from "../components/Row"
import axios from "axios"
import { useCallback } from "react/cjs/react.development"
import AddressItem from "../components/AddressItem"

function ZipCodeFinder() {
  const [keyword, setKeyword] = useState("")
  const [list, setList] = useState([])
  const search = useCallback(() => {
    axios
      .get("https://www.juso.go.kr/addrlink/addrLinkApi.do", {
        params: {
          confmKey: "devU01TX0FVVEgyMDIyMDYxNTE3MTIyNDExMjY5Mzk=",
          currentPage: 1,
          countPerPage: 100,
          keyword,
          resultType: "json",
        },
      })
      .then((response) => {
        setList(response.data.results.juso)
      })
      .catch(console.warn)
  }, [keyword, list])
  return (
    <Padding style={{ flex: 1 }}>
      <Row>
        <TextInput
          style={{ flex: 1 }}
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
        />
        <Button title="검색" onPress={search} />
      </Row>
      <FlatList
        data={list}
        keyExtractor={(item) => item.rnMgtSn + item.roadAddr}
        renderItem={(item) => (
          <>
            <Text>
              <AddressItem item={item.item} />
            </Text>
          </>
        )}
      />
    </Padding>
  )
}

export default ZipCodeFinder
