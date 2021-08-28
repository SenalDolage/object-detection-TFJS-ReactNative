import React, { useContext } from "react";
import { Button } from "../Button/Button";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import SearchItemContext from "../../context/ItemContext";

export function VoiceInputItem() {
    const { item, setItem} = useContext(SearchItemContext);
    return (
        <>
        <Button onPress={() => setItem("bsfdg")} title={item} />
        <Text>{item}</Text>
        </>
    );
};
