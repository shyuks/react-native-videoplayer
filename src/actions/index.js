export const selectVideo = (videoId) => {
    return {
        type: 'select_video',
        payload: videoId
    };
};