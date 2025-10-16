import { AppColors } from "@/constants/colors";
import { Image } from "expo-image";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";

interface SlidingImagesSectionProps {
  images: any[];
  imageHeight: number;
  imageStyle?: object;
  dotColor?: string;
  dotInactiveColor?: string;
}

const { width: screenWidth } = Dimensions.get("window");

const SlidingImagesSection: React.FC<SlidingImagesSectionProps> = ({
  images,
  imageHeight,
  imageStyle,
  dotColor = AppColors.primary,
  dotInactiveColor = AppColors.primary,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          // <View>
          <Image
            source={item}
            style={[
              {
                width: screenWidth,
                height: imageHeight,
                contentFit: "contain",
                // backgroundColor: AppColors.white,
              },
              imageStyle,
            ]}
          />
          // </View>
        )}
      />
      <View style={styles.dotsContainer}>
        {images.map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.dot,
              {
                backgroundColor:
                  idx === activeIndex ? dotColor : dotInactiveColor,
                width: idx === activeIndex ? 18 : 8,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    transitionDuration: "150ms",
  },
});

export default SlidingImagesSection;
