import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const sizes = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,
    padding3: 15,
    padding4: 18,
    padding5: 20,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export default sizes;