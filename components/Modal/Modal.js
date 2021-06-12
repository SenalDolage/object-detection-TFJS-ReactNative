import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import { Text, View, StyleSheet } from "react-native";
import { colors, spacing } from "../../theme";
import { Button } from "../Button/Button";

export function PopUp({ text = "Modal Content", buttonText = "Ok", style }) {
  const [isModalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      isVisible={isModalVisible}
      style={style}
      animationIn="fadeIn"
      animationOut="fadeOut"
      hideModalContentWhileAnimating
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>{text}</Text>
        <Button
          title={buttonText}
          onPress={() => setModalVisible(false)}
          type="light"
        />
      </View>
    </Modal>
  );
}

PopUp.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  style: PropTypes.shape({}),
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: colors.white,
    padding: spacing.large,
    borderRadius: 10,
  },

  modalText: {
    paddingBottom: spacing.large,
    lineHeight: spacing.large,
  },
});
