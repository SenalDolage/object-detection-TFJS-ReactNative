import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Platform,
  LogBox,
} from "react-native";
import { Camera } from "expo-camera";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { cameraWithTensors } from "@tensorflow/tfjs-react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { colors, spacing } from "../../theme";
import { Button } from "../../components";
LogBox.ignoreAllLogs();

export function CameraScreen() {
  const [predictionFound, setPredictionFound] = useState(false);
  const [hasPermission, setHasPermission] = useState();
  const [model, setModel] = useState();
  const TensorCamera = cameraWithTensors(Camera);
  let requestAnimationFrameId = 0;
  const textureDims =
    Platform.OS === "ios"
      ? { width: 1080, height: 1920 }
      : { width: 1600, height: 1200 };
  // const tensorDims = { width: 152, height: 200 };
  const tensorDims = { height: 500, width: 290 };

  async function loadModel() {
    try {
      const model = await mobilenet.load();
      setModel(model);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");

      await tf.ready();
      await loadModel();
    })();
  }, []);

  const getPrediction = async (tensor) => {
    if (!tensor) {
      return;
    }

    const prediction = await model.classify(tensor, 1);
    console.log(`prediction: ${JSON.stringify(prediction)}`);

    if (!prediction || prediction.length === 0) {
      cancelAnimationFrame(requestAnimationFrameId);
      setPredictionFound(false);
      return;
    } else {
      setPredictionFound(true);
    }
  };

  const handleCameraStream = (imageAsTensors) => {
    const loop = async () => {
      const nextImageTensor = await imageAsTensors.next().value;
      await getPrediction(nextImageTensor);
      requestAnimationFrameId = requestAnimationFrame(loop);
    };
    loop();
  };

  const renderCameraView = () => {
    return (
      <View style={styles.cameraView}>
        <TensorCamera
          style={styles.camera}
          type={Camera.Constants.Type.back}
          zoom={0}
          cameraTextureHeight={textureDims.height}
          cameraTextureWidth={textureDims.width}
          resizeHeight={tensorDims.height}
          resizeWidth={tensorDims.width}
          resizeDepth={3}
          onReady={handleCameraStream}
        />
      </View>
    );
  };

  useEffect(() => {
    return () => {
      cancelAnimationFrame(requestAnimationFrameId);
    };
  }, [requestAnimationFrameId]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {model ? (
        <View style={styles.cameraContainer}>
          <View style={styles.scanTextWrap}>
            <Text style={styles.scanText}>Scanning..</Text>
          </View>
          <View>
            <View>{renderCameraView()}</View>
          </View>
          <View>
            <Button title="Stop scan" />
          </View>
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color={colors.green} />
          <Text style={styles.loadingText}>TensorFlow is loading...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },

  cameraContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  cameraView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "100%",
  },

  camera: {
    width: 700 / 2,
    height: 800 / 2,
    zIndex: 1,
    borderWidth: 0,
    borderRadius: 0,
  },

  loadingText: {
    marginTop: spacing.large,
  },

  scanTextWrap: {
    width: "100%",
    alignItems: "center",
  },

  scanText: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
  },
});