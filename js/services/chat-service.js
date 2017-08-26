class ChatService {
    constructor($firebaseArray) {
        this.$firebaseArray = $firebaseArray;
        this.chatRef = null;
    }

    registerInChat() {
        this.chatRef = firebase.database().ref('messages');
    }

    getAllMessages() {
        return this.$firebaseArray(this.chatRef);
    }

    sendMessage(author, message) {
        this.$firebaseArray(this.chatRef).$add({
            author: author,
            message: message
        });
    }
}

angular.module('bexSchool.services.chat', ['firebase'])
    .service('ChatService', ChatService);
