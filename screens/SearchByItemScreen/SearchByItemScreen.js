import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors, spacing } from "../../theme";
import { VoiceInputItem } from "../../components";

export function SearchByItemScreen() {
    return (
        <View>
            <VoiceInputItem />
        </View>
    );
}

