import React from 'react-native';

const {
    Text,
    View,
    Animated,
} = React;

import Swipeout from 'react-native-swipeout';

const TestFunctionC = () => {
    return (
        <Text>
            hello!
        </Text>
    );
};


export default function() {
    var swipeoutBtns = [
      {
        text: 'Done',
        backgroundColor: '#05A5D1',
        underlayColor: '#273539',
        onPress: this.handleDonePress.bind(this),
      }
    ];



    return (

            <Animated.View style={{
                marginBottom: 20,
                translateX: this.state.doneAnimation.interpolate({
                    inputRange: [0, 0.1, 1],
                    outputRange: [0, -100, -1200],  // 0 : 150, 0.5 : 75, 1 : 0
                }),
            }}
            >

                <Swipeout
                    backgroundColor='#fff'
                    close={this.state.deleted}
                    right={swipeoutBtns}
                    style={{
                        marginBottom: 20,
                    }}
                >

                    <View style={{
                        borderColor: '#E7E7E7',
                        borderWidth: 1,
                        backgroundColor: '#fff',
                        padding: 20,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    >



                            <Text style={{
                                fontSize: 20,
                                fontWeight: '600',
                            }}
                            >
                                {this.props.todo.task}
                            </Text>

                            <TestFunctionC />
                    </View>
                </Swipeout>
            </Animated.View>

    );
}
