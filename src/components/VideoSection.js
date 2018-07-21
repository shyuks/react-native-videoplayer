import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';
import { Card, CardSection, Button } from './common';

class VideoSection extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <WebView 
                    style={{flex: 1}}
                    source={{ uri:"https://www.youtube.com/watch?v=3NhHqPA8nIs" }}
                />
                <Card>
                    <CardSection>
                        <Button>
                            Rewind
                        </Button>
                        <Button>
                            Play/Pause
                        </Button>
                        <Button>
                            Forward
                        </Button>
                    </CardSection>
                    
                    <CardSection>
                        <Button>
                            Previous Vid
                        </Button>
                        <Button>
                            Next Vid
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default VideoSection;