import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import * as actions from '../actions';

class VideoSection extends Component {

    renderVideo() {
        const { library, videoId } = this.props;
        return (
            <WebView 
                style={{flex: 1}}
                source={{ uri: library[videoId].source }}
            />
        );
    }

    previousVideo() {
        const { videoId } = this.props;
        let newId = 0;

        if (videoId === 0) {
            newId = 7;
        } else {
            newId = videoId - 1;
        }

        this.props.selectVideo(newId)
    }
    
    nextVideo() {
        const { videoId } = this.props;
        let newId = 0;

        if (videoId === 7) {
            newId = 0;
        } else {
            newId = videoId + 1;
        }
        
        this.props.selectVideo(newId)
    }

    render() {
        return (
            <View style={{flex:1}}>
                {this.renderVideo()}
                <Card>
                    <CardSection>
                        <Button onPress={this.previousVideo.bind(this)}>
                            Previous Vid
                        </Button>
                        <Button onPress={this.nextVideo.bind(this)}>
                            Next Vid
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { library: state.library, videoId: state.videoId }
}

export default connect(mapStateToProps, actions)(VideoSection);