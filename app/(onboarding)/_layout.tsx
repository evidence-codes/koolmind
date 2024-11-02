import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const Slide1 = require("../../assets/images/slide-1.jpeg");
const Slide2 = require("../../assets/images/slide-2.jpeg");
const Slide3 = require("../../assets/images/slide-3.jpeg");

const images = [Slide1, Slide2, Slide3];
const heads = [
  "Welcome to koolmind",
  "Personalized Support",
  "Calming Exercises",
];
const texts = [
  "Discover tools, resources, and support tailored to help you grow, recharge, and thrive",
  "Our resources are designed to suit your unique needs, whenever you need them",
  "Take time for yourself with calming exercises, reflections, and tips to help you unwind",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function _layout() {
  const [imgActive, setImgActive] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const navigation = useNavigation(); // Initialize navigation

  const onchange = (nativeEvent: any) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  };

  const handleNext = () => {
    const nextSlide = imgActive === images.length - 1 ? 0 : imgActive + 1;
    setImgActive(nextSlide);
    scrollRef.current?.scrollTo({
      x: WIDTH * nextSlide,
      animated: true,
    });
  };

  const handleContinue = () => {
    navigation.navigate("SignUp"); // Navigate to SignUp screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          ref={scrollRef}
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={styles.wrap}
              resizeMode="stretch"
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={index}
              style={imgActive === index ? styles.dotActive : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionHead}>{heads[imgActive]}</Text>
        <Text style={styles.descriptionText}>{texts[imgActive]}</Text>
        {imgActive === images.length - 1 ? (
          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.6,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "white",
  },
  dot: {
    margin: 3,
    color: "#888",
  },
  descriptionContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  descriptionHead: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 24,
    fontWeight: "light",
    color: "#000",
    textAlign: "center",
    padding: 16,
  },
  button: {
    width: 330,
    height: 50,
    backgroundColor: "#4577FF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    color: "#fff",
  },
});
