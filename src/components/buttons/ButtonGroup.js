import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const ButtonGroup = ({ buttons, selectedButton, onPress }) => {
  return (
    <View style={styles.buttonGroup}>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPress(button)}
          style={[
            styles.button,
            selectedButton === button && styles.selectedButton,
          ]}
        >
          <Text style={styles.buttonText}>{button}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent:"space-evenly",
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    marginHorizontal: 5,

  },
  selectedButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D2D2D',
  },
});

export default ButtonGroup;



// import React from 'react';
// import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

// const ButtonGroup = ({ buttons, selectedButton, onPress }) => {
//   return (
//     <View style={styles.buttonGroup}>
//       {buttons.map((button, index) => (
//         <TouchableOpacity
//           key={index}
//           onPress={() => onPress(button)}
//           style={[
//             styles.button,
//             selectedButton === button && styles.selectedButton,
//           ]}
//         >
//           <Text style={styles.buttonText}>{button}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   buttonGroup: {
//     flexDirection: 'row',
//     justifyContent:"space-evenly",
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#F2F2F2',
//     borderRadius: 8,
//     marginHorizontal: 5,

//   },
//   selectedButton: {
//     backgroundColor: 'white',
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#2D2D2D',
//   },
// });

// export default ButtonGroup;
