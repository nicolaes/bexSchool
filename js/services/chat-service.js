class ChatService {
    constructor($firebaseArray) {
        this.$firebaseArray = $firebaseArray;
        this.chatRef = null;
    }

    registerInChat() {
        this.chatRef = firebase.database().ref('messages');
    }

    getAllMessages() {
        if (!this.chatRef) {
            throw new Error('You need to register first.');
        }

        return this.$firebaseArray(this.chatRef);
    }

    sendMessage(author, message) {
        // code will be posted on chat :)
    }
}

// declare Angular service here
