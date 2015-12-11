import React from 'react-native';
const {
    Text,
    View,
    Image,
    TouchableHighlight,
    Animated,
} = React;


export default function() {
    let actionButton = null;

    if (this.props.todo.state === 'Pending') {
        actionButton = (
            <TouchableHighlight
                onPress={this.handleDonePress.bind(this)}
                style={{
                    borderRadius: 15,
                    padding: 5,
                }}
                underlayColor="#ddd"
            >
                <Image
                    source={require('../images/done.png')}
                    style={{
                        marginTop: 0,
                    }}
                />
            </TouchableHighlight>
        );
    }

    return (

            <Animated.View style={{
                marginBottom: 20,
                marginLeft: 20,
                marginRight: 20,
                translateX: this.state.doneAnimation.interpolate({
                    inputRange: [0, 0.1, 1],
                    outputRange: [0, -100, -1200],  // 0 : 150, 0.5 : 75, 1 : 0
                }),
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


                    {actionButton}
                </View>
            </Animated.View>

    );
}
