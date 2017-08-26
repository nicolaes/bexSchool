class ChatController {
    constructor(ChatService) {
        this.ChatService = ChatService;

        this.ChatService.registerInChat();
        this.chatMessages = this.ChatService.getAllMessages();
    }

    sendMessage(message) {
        this.ChatService.sendMessage(this.author, this.message);
        this.message = '';
    }

    setAuthor(author) {

    }
}

angular
    .module('bexSchool.directives.chatRoom', [
        'bexSchool.services.chat'
    ])
    .directive('chat', function () {
        return {
            templateUrl: '/js/directives/chat/chat.html',
            controller: ChatController,
            controllerAs: 'ctrl'
        };
    });
